// import _ from 'lodash';
import * as types from './actionTypes';
import React from "react";

const initialState = {
    stats: {},

    args: { username: "username" },

    user: {
        id: 10,
        user: "",
        data: null
        // locked: false,
    },

    tempUser: null,

    valid: false,
    tries: 0,
};


export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_STATS:
            return {
                ...state,
                stats: action.stats
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
        default:
            return state;
    }
};

// селекторы

export function getUserFound (state) { return state.users.tempUser; }

// User
export function getUser (state) { return state.users.user; }

export function getStats (state) { return state.users.stats; }
