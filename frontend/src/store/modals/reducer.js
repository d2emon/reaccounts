'use strict'
import React from "react"

import * as types from './actionTypes'

const initialState = {
    modal: null,

    login: false,
    motd: false,
    changePassword: false,
    showAccount: false,
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
        case types.SHOW_ACCOUNT:
            console.log(action)
            return {
                ...state,
                showAccount: action.show
            }
        case types.EDIT_ACCOUNT:
            console.log(action)
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
export const isShowUserModalOpen = state => state.modals.showAccount
export const isEditUserModalOpen = state => { console.log(state);return state.modals.editAccount }
