import * as types from './actionTypes';
// import reaccountsService from '../../services/reaccounts';

import {
    EXE,
    RESET_N,
    BAN_FILE,
} from '../../config';
import React from "react";
import reaccountsService from "../../services/reaccounts";


// Dummy functions

const stat = (payload) => { console.log("STAT", payload); return {st_mtime: 0}; };
const ctime = (payload) => { console.log("CTIME", payload); return 0; };
const time = (payload) => { console.log("TIME", payload); return 0; };


// Actions

export const testHostname = payload => dispatch => {
    reaccountsService.testHostname(payload.hostname)
        .then(() => {})
        .catch(error => {
            dispatch({
                type: types.SET_ERROR,
                error: error.message
            });
        });

    reaccountsService.testNologin()
        .then(() => {})
        .catch(error => {
            dispatch({
                type: types.SET_ERROR,
                error: error.message
            });
        });

    /*
     * Check if banned first
     */
    reaccountsService.testBanned({ user_id: payload.user_id })
        .then(() => {})
        .catch(error => {
            dispatch({
                type: types.SET_ERROR,
                error: error.message
            });
        });
};

/*
 * Now check the option entries
 *
 * -n(name)
 */
export const getArgs = ({username}) => dispatch => {
    console.log("ARGS", username);
    if (!username) return;
    dispatch({
        type: types.USERNAME_SET,
        qnmrq: 1,
        ttyt: 0,
        namegt: username
    });
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
    let a = RESET_N.fopen("r");
    if (a) {
        r = a.fscanf("%ld");
        a.fclose();

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
export const setUser = ({ username }) => dispatch => {
    console.log("LOGIN", username);

    /*
     * Get the user name
     */
    dispatch({
        type: types.SET_USERNAME,
        username: username
    });
};


/* Main login code */
export const findUser = ({ username }) => dispatch => {
    console.log("search for", username);
    reaccountsService.findUser({ username: username })
        .then(response => {
            console.log(response);
            dispatch({
                type: types.FOUND_USER,
                user: response
            });
        })
};


export const testPassword = ({ username, password }) => dispatch => {
    reaccountsService.findUser({ username: username })
        .then(response => {
            console.log(response);

            let valid = password === response.password;
            dispatch({
                type: types.TEST_PASSWORD,
                user: response,
                valid: valid
            });

            // if (block !== payload.pwd) return true;
            // if (tries >= 2) { throw Error("No!"); }
        })
};
