import React from "react";

import * as types from './actionTypes';
import * as errorTypes from '../errors/actionTypes';

import reaccountsService from '../../services/reaccounts';

// Actions
export const setStep = payload => dispatch => {
    dispatch({
        type: types.SET_STEP,
        step: payload.step
    })
};

export const fetchStats = payload => dispatch => {
    // console.log(payload);
    reaccountsService.usersMain(payload)
        .then(res => {
            console.log(res);
            dispatch({
                type: types.SET_STATS,
                created_time: res.created,
                reset_time: res.reset,
                motd: res.motd
            });
        })
        .catch(error => {
            console.error('ERROR', error);
            dispatch({
                type: errorTypes.SET_ERROR,
                param: 'global',
                error: error.message
            });
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
            type: errorTypes.SET_ERROR,
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
            type: errorTypes.SET_ERROR,
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
            type: errorTypes.SET_ERROR,
            errors: response.errors,
            response: response,
            user: response.user
        }))
        .then(response => dispatch({
            ...response,
            type: types.FOUND_USER
        }));
};

/**
 * Change user password
 * @param payload
 * @returns {Function}
 */
export const changePassword = payload => dispatch => {
    console.log('Action::changePassword', payload)
    // TODO: Move it to backend
    /*
    if (!this.props.user) throw Error('No user')
    if (this.state.oldPassword.value !== this.props.user.password) throw Error('Incorrect Password')
    if (!this.state.newPassword.value) throw Error('')
    if (this.state.newPassword.value.indexOf(',')) throw Error('Illegal Character in password')
    if (this.state.newPassword.value !== this.state.verifyPassword.value) throw Error('NO!')
    */

    /*
    delu2(this.props.username)

    // delete me and tack me on end!
    let fl = openlock(PFL, "a")
    fl.fprintf(fl.qcrypt(this.props.user))
    fl.fclose(fl)
    */
}
