// import _ from 'lodash';
import * as types from './actionTypes';
import React from "react";

const initialState = {
    created_time: null,
    reset_time: null,
    motd: null,

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

    step: null
};


export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_STEP:
            console.log(`Go to step "${action.step}"`);
            return {
                ...state,
                step: action.step
            };
        case types.SET_STATS:
            return {
                ...state,
                created_time: action.created_time,
                reset_time: action.reset_time,
                motd: action.motd
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
export function getStep (state) { return state.users.step; }

export function getCreatedTime (state) { return state.users.created_time; }
export function getResetTime (state) { return state.users.reset_time; }
export function getMotd (state) { return state.users.motd; }

export function getUserFound (state) { return state.users.tempUser; }

// User
export function getUser (state) { return state.users.user; }

