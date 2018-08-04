import * as types from './actionTypes';
import React from "react";

const initialState = {
    errors: [],
    passwordError: null
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_ERROR:
            return {
                ...state,
                errors: action.errors
            };

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

export const getChangePasswordErrors = state => ({
    oldPassword: state.errors.passwordError,
    newPassword: state.errors.passwordError,
    verifyPassword: state.errors.passwordError
})
