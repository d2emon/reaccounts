'use strict'
import React from "react"

import * as types from './actionTypes'

const initialState = {
    modal: null,

    motd: false
}

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.MODAL:
            return {
                ...state,
                modal: action.show
            }
        case types.MOTD:
            return {
                ...state,
                motd: action.show
            }
        default:
            return state
    }
}

export const isModalOpen = state => state.modals.modal

export const isMotdOpen = state => state.modals.motd
