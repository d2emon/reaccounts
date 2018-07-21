import * as types from './actionTypes';
// import reaccountsService from '../../services/reaccounts';

import {
    HOST_MACHINE,
    EXE,
    RESET_N,
    BAN_FILE
} from '../../config';


export function gethostname (payload) {
    return () => {
        console.log("GETHOSTNAME", payload);
    };
}

export function chknolog (payload) {
    return () => {
        console.log("CHKNOLOG", payload);
    };
}


const stat = (payload) => {
    console.log("STAT", payload);
    return {}
};


const ctime = (payload) => {
    console.log("CTIME", payload);
    return {}
};


const fopen = (payload) => {
    console.log("FOPEN", payload);
    return {}
};


export function testHostname (payload) {
    return () => {
        console.log(payload, payload.user, HOST_MACHINE);
        if (payload.user !== HOST_MACHINE) {
            throw Error(`AberMUD is only available on ${HOST_MACHINE}, not on ${payload.user}\n`);
        }
    };
}

export function loadStats (payload) {
    return () => {
        console.log(payload);

        let space = 0;
	let statbuf = stat(EXE);
        if (!statbuf) {
            space = "&lt;unknown&gt;\n";
        } else {
            space = ctime(statbuf.st_mtime);
        }

        let a = fopen(RESET_N, "r");
        console.log(space, a);
    };
}


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

export function beforeLogin (payload) {
    return (dispatch) => {
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
            console.error(error);
	});
    };
}
