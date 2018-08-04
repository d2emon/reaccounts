'use strict'
import React from "react"

import * as types from './actionTypes';

export const showModal = (modal, show) => dispatch => dispatch({
    type: types.MODAL,
    modal,
    show
})

export const showLoginModal = show => dispatch => dispatch({
    type: types.LOGIN,
    show
})

export const showMotdModal = show => dispatch => dispatch({
    type: types.MOTD,
    show
})

export const showChangePasswordModal = show => dispatch => dispatch({
    type: types.CHANGE_PASSWORD,
    show
})
