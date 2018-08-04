'use strict'
import * as types from './actionTypes'

const initialState = {
    errors: [],

    loginUsernameError: null,
    loginPasswordError: null,

    passwordError: null
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_ERROR:
            return {
                ...state,
                errors: action.errors
            };

        case types.SET_LOGIN_ERROR:
            return {
                ...state,
                loginUsernameError: action.username,
                loginPasswordError: action.password
            }
        case types.SET_PASSWORD_ERROR:
            return {
                ...state,
                passwordError: action.error
            }
        default:
            return state;
    }
};

export const getErrors = (state) => state.errors.errors;

export const getLoginErrors = state => ({
    username: state.errors.loginUsernameError,
    password: state.errors.loginPasswordError
})

export const getChangePasswordErrors = state => ({
    oldPassword: state.errors.passwordError,
    newPassword: state.errors.passwordError,
    verifyPassword: state.errors.passwordError
})
