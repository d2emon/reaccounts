'use strict'
import React from "react"

import * as types from './actionTypes'

const initialState = {
    modal: null,

    login: false,
    motd: false,
    changePassword: false
}

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.MODAL:
            return {
                ...state,
                modal: action.show
            }
        case types.LOGIN:
            return {
                ...state,
                login: action.show
            }
        case types.MOTD:
            return {
                ...state,
                motd: action.show
            }
        case types.CHANGE_PASSWORD:
            return {
                ...state,
                changePassword: action.show
            }
        default:
            return state
    }
}

export const isModalOpen = state => state.modals.modal
export const isChangePasswordModalOpen = state => state.modals.changePassword

export const isLoginOpen = state => state.modals.login
export const isMotdOpen = state => state.modals.motd
