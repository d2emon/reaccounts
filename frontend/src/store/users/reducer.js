// import _ from 'lodash';
import * as types from './actionTypes';

const initialState = {
    users: undefined,

    args: { n: "arg2" },
    user: "HOST MACHINE",
    stats: "STATS"
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.USERS_FETCHED:
            return {
                ...state,
                accounts: action.accounts
            };
        case types.TEST_BANNED:
            return {
                ...state,
                user: action.user,
                is_banned: action.is_banned
            };
	default:
            return state;
    }
};

// селекторы

export function getUsers (state) { return state.users.accounts; }
export function getArgs (state) { return state.users.args; }
export function getUser (state) { return state.users.user; }
export function getStats (state) { return state.users.stats; }
export function isBanned (state) { return state.users.is_banned; }
