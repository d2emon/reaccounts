'use strict'
import React from "react"

import * as types from './actionTypes';

export const showModal = show => dispatch => dispatch({
    type: types.MODAL,
    show
})

export const showChangePasswordModal = show => dispatch => dispatch({
    type: types.CHANGE_PASSWORD,
    show
})


export const showLoginModal = show => dispatch => dispatch({
    type: types.LOGIN,
    show: show
})

export const showMotdModal = show => dispatch => dispatch({
    type: types.MOTD,
    show: show
})
