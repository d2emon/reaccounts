// import _ from 'lodash';
import * as types from './actionTypes';
import React from "react";

const initialState = {
    args: { username: "username" },

    user: {
        id: 10,
        user: "",
        data: null
    },

    tempUser: null,

    valid: false,
    tries: 0,
    // locked: false,

    stats: {
        created: 0,
        elapsed: 0
    },

    // ERRORS
    errors: [],

    // UNKNOWN
    ttyt: 0,

    // GLOBAL
    qnmrq: 0,
    namegt: ""
};


export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_ERROR:
            return {
                ...state,
                errors: action.errors
            };
        case types.SET_USERNAME:
            let user = state.user;
            user.username = action.username;

            return {
                ...state,
                user: user
            };
        case types.FOUND_USER:
            return {
                ...state,
                tempUser: action.user
            };
        case types.TEST_PASSWORD:
            /*
            let tries = action.valid ? state.tries : state.tries + 1;
            console.log(action, tries);
            if (tries >= 2) return {
                ...state,
                errors: [{
                    param: 'password',
                    msg: 'No!'
                }]
            };
            */
            return {
                ...state,
                valid: action.valid
                // tries: tries
            };

        case types.USERNAME_SET:
            return {
                ...state,
                qnmrq: action.qnmrq,
                ttyt: action.ttyt,
                namegt: action.namegt
            };
        case types.STATS_GET:
            return {
                ...state,
                stats: action.stats
            };
	    default:
            return state;
    }
};

// селекторы

// Errors
export const getErrors = (state) => state.users.errors;

export function getUserFound (state) { return state.users.tempUser; }

// User
export function getUser (state) { return state.users.user; }

export function getArgs (state) { return state.users.args; }
export function getStats (state) { return state.users.stats; }
export const getName = (state) => state.users.namegt;
