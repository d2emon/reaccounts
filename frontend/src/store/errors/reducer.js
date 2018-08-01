import * as types from './actionTypes';
import React from "react";

const initialState = {
    errors: []
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_ERROR:
            return {
                ...state,
                errors: action.errors
            };
        default:
            return state;
    }
};

export const getErrors = (state) => state.errors.errors;
