// import _ from 'lodash';
import * as types from './actionTypes';

const initialState = {
    users: undefined
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.USERS_FETCHED:
            return {
                ...state,
                accounts: action.accounts
            };
	default:
            return state;
    }
};

// селекторы

export function getUsers (state) {
    return state.users.accounts;
}
