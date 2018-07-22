import * as types from './actionTypes';
// import reaccountsService from '../../services/reaccounts';

import {
    HOST_MACHINE,
    EXE,
    RESET_N,
    BAN_FILE
} from '../../config';
import React from "react";


// Dummy functions

const gethostname = (payload)  => { console.log("GETHOSTNAME", payload); };
const getty = () => { console.log("GETTY"); };
const stat = (payload) => { console.log("STAT", payload); return {st_mtime: 0}; };
const ctime = (payload) => { console.log("CTIME", payload); return 0; };
const time = (payload) => { console.log("TIME", payload); return 0; };
const fopen = (payload) => { console.log("FOPEN", payload); return {}; };
const fscanf = (payload) => { console.log("FSCANF", payload); return {}; };
const fclose = (payload) => { console.log("FCLOSE", payload); return {}; };
const fflush = (payload) => { console.log("FFLUSH", payload); return {}; };
const gepass = (args) => { console.log("GEPASS", args); return "args.block"; };


// Functions

/* Return block data for user or -1 if not exist */
const logscan = (user) => {
    let unit = openlock(PFL, "r");
    if (!unit) throw Error("No persona file");

    let block = "";
    while (fgets(block, 255, unit)) {
        block = dcrypt(block, block.length);
        let wkng = scan(block, 0, "", ".");
        if (wkng.toLowerCase() === user.toLowerCase()){
            return block;
        }
    }
    return null;
};


// Actions

/*
 * Check we are running on the correct host
 * see the notes about the use of flock();
 * and the affects of lockf();
 */
export const testHostname = (payload) => () => {
    gethostname(33);
    new Promise((resolve) => {
        console.log(payload, HOST_MACHINE);
        if (payload.user !== HOST_MACHINE) {
            throw Error(`AberMUD is only available on ${HOST_MACHINE}, not on ${payload.user}.`);
        }
        resolve(HOST_MACHINE);
    }).then(response => {
        console.log(payload, response);
    }).catch(error => {
        console.error(error);
    });
};

/*
 * Check if there is a no logins file active
 */
export const chknolog = (payload) => () => {
    console.log("CHKNOLOG", payload);
};

/*
 * Now check the option entries
 *
 * -n(name)
 */
export const getArgs = ({args}) => dispatch => {
    if (args.n !== undefined) {
        dispatch({
            type: types.USERNAME_SET,
            qnmrq: 1,
            ttyt: 0,
            namegt: args.n,
            namegiv: true
        });
    } else {
        getty();
    }
};


export const loadStats = () => dispatch => {
    let space = 0;
	let statbuf = stat(EXE);
    if (!statbuf) {
        space = "&lt;&lt;unknown&gt;&gt;\n";
    } else {
        space = ctime(statbuf.st_mtime);
    }

    let r = false;
    let a = fopen(RESET_N, "r");
    if (a) {
        r = fscanf(a, "%ld");
        fclose(a);

        let ct = time();
        r = ct - r;
    }

    dispatch({
        type: types.STATS_GET,
        stats: {
            created: space,
            elapsed: r
        }
    });
};


/* Does all the login stuff */
export const beforeLogin = (payload) => dispatch => {
    console.log("LOGIN", payload);
    /*
     * Check if banned first
     */
    return chkbnid({ user: cuserid() }).then(response => {
        console.log(response);
        console.log(payload);
        /*
         * Get the user name
         */
        let user = payload.user;
        if (payload.namegiv) {
            user = payload.namegt;
        }
        dispatch({
            type: types.TEST_BANNED,
            user: user,
            is_banned: response
        });
    }).catch(error => {
        let user = payload.user;
        if (payload.namegiv) {
            user = payload.namegt;
        }
        console.error(error);
        dispatch({
            type: types.TEST_BANNED,
            user: user,
            is_banned: true
        });
    });
};


/* Main login code */
export const logpass = (payload) => dispatch => {
    dispatch({
        type: types.USERNAME_SCAN,
        lump: logscan(payload.user)
    });
};


export const testPassword = (payload) => dispatch => {
    fflush();
    let block = gepass();
    let valid = block === payload.pwd;
    dispatch({
        type: types.TEST_PASSWORD,
        valid: valid
    });

    // if (block !== payload.pwd) return true;
    // if (tries >= 2) { throw Error("No!"); }
};


// Other


/* Check to see if UID in banned list */
const chkbnid = (payload) => new Promise((resolve) => {
    if (BAN_FILE === undefined) resolve(false);
    console.log(BAN_FILE);
    BAN_FILE.forEach((item) => {
         console.log(item, payload.user);
         if (item.toLowerCase() === payload.user.toLowerCase()) {
             throw Error("I'm sorry- that userid has been banned from the Game");
         }
    });
    resolve(false);
});

const cuserid = () => { console.log("CUSERID"); return "user_id"; };

