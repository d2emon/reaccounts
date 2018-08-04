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

export const showShowUserModal = show => dispatch => dispatch({
    type: types.SHOW_ACCOUNT,
    show
})

export const showEditUserModal = show => dispatch => dispatch({
    type: types.EDIT_ACCOUNT,
    show
})

export const showDeleteUserModal = show => dispatch => dispatch({
    type: types.DELETE_ACCOUNT,
    show
})
