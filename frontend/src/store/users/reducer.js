// import _ from 'lodash';
import * as types from './actionTypes';
import React from "react";

const initialState = {
    args: { n: "arg2" },
    user: "HOST MACHINE",
    stats: {
        created: 0,
        elapsed: 0
    },
    lump: null,
    valid: false,
    tries: 0,
    locked: false,

    // UNKNOWN
    ttyt: 0,

    // GLOBAL
    qnmrq: 0,
    namegt: "",
    namegiv: false
};


function cuserid() { console.log("CUSERID"); }


export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TEST_BANNED:
            return {
                ...state,
                user: action.user,
                is_banned: action.is_banned
            };
        case types.USERNAME_SET:
            return {
                ...state,
                qnmrq: action.qnmrq,
                ttyt: action.ttyt,
                namegt: action.namegt,
                namegiv: action.namegiv
            };
        case types.STATS_GET:
            return {
                ...state,
                stats: action.stats
            };
        case types.USERNAME_SCAN:
            return {
                ...state,
                lump: action.block
            };
        case types.TEST_PASSWORD:
            let tries = action.valid ? state.tries : state.tries + 1;
            return {
                ...state,
                valid: action.valid,
                tries: tries,
                locked: tries >= 2
            };
	    default:
            return state;
    }
};

// селекторы

export function getArgs (state) { return state.users.args; }
export function getUser (state) { return state.users.user; }
export function getStats (state) { return state.users.stats; }
export const getName = (state) => state.users.namegiv;
export const getUid = () => cuserid();
export const getLump = (state) => state.users.lump;
export const isBanned = (state) => state.users.is_banned;
export const isNew = (state) => !state.users.lump;
export const isValid = (state) => state.users.valid;
