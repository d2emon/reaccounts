'use strict'
import React from "react"

import * as types from './actionTypes'

const initialState = {
    modal: null,

    login: false,
    motd: false,
    changePassword: false,
    editAccount: false
}

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.MODAL:
            return {
                ...state,
                [action.modal]: action.show
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
        case types.EDIT_ACCOUNT:
            return {
                ...state,
                editAccount: action.show
            }
        default:
            return state
    }
}

export const isModalOpen = state => state.modals.modal

export const isLoginModalOpen = state => state.modals.login
export const isMotdModalOpen = state => state.modals.motd
export const isChangePasswordModalOpen = state => state.modals.changePassword
export const isEditUserModalOpen = state => state.modals.editAccount
