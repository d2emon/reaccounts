'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap'

import ChangePasswordForm from "../containers/Talker/ChangePasswordForm"

import * as usersSelector from "../store/users/reducer";
import * as usersActions from "../store/users/actions";

class ChangePasswordModal extends Component {
    close (e) {
        e.preventDefault()
        this.props.dispatch(usersActions.showChangePasswordModal(false))
    }

    render () {
        return <Modal toggle={this.close.bind(this)} isOpen={ this.props.isOpen }>
            <ModalHeader toggle={this.close.bind(this)}>Change password for { this.props.user.username }</ModalHeader>
            <ModalBody>
                <ChangePasswordForm user={this.props.user} />
            </ModalBody>
        </Modal>
    }
}

function mapStateToProps(state) {
    return {
        isOpen: usersSelector.showChangePassword(state)
    }
}

export default connect(mapStateToProps)(ChangePasswordModal)
