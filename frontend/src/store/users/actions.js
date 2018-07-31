import React from "react";

import * as types from './actionTypes';
import reaccountsService from '../../services/reaccounts';

// Actions

export const testHostname = payload => dispatch => {
    console.log(payload);
    reaccountsService.usersMain({
        hostname: payload.hostname,
        user_id: payload.user_id
    })
    .then(res => {
        console.log(res);
        dispatch({
            type: types.STATS_GET,
            stats: res
        });
    })
    .catch(error => {
        console.error(error);
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

export const login = ({ username, password }) => dispatch => {
    console.log(username, password);
    reaccountsService.login({ username, password, save: true })
        .then(response => dispatch({
            type: types.SET_ERROR,
            errors: response.errors,
            response: response,
            user: response.user
        }))
        .then(response => dispatch({
            ...response,
            type: types.FOUND_USER
        }))
        .then(response => dispatch({
            ...response,
            type: types.TEST_PASSWORD,
            valid: !response.errors.length
        }));
};

export const validateUser = ({ username, password }) => dispatch => {
    reaccountsService.login({ username, password, save: false })
        .then(response => dispatch({
            type: types.SET_ERROR,
            errors: response.errors,
            response: response,
            user: response.user
        }))
        .then(response => dispatch({
            ...response,
            type: types.FOUND_USER
        }))
        .then(response => dispatch({
            type: types.TEST_PASSWORD,
            valid: !response.errors.length
        }));
};

export const searchUser = (user) => dispatch => {
    reaccountsService.search(user)
        .then(response => dispatch({
            type: types.SET_ERROR,
            errors: response.errors,
            response: response,
            user: response.user
        }))
        .then(response => dispatch({
            ...response,
            type: types.FOUND_USER
        }));
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
