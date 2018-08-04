'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap'

import ChangePasswordForm from "../containers/Talker/ChangePasswordForm"

class ChangePasswordModal extends Component {
    constructor (props) {
        super(props)

        this.state = { isOpen: props.isOpen }

        this.close = this.close.bind(this)
    }

    componentWillReceiveProps (nextProps, nextContext) {
        this.setState({ isOpen: nextProps.isOpen })
    }

    close (e) {
        e.preventDefault()
        this.setState({ isOpen: false })
    }

    render () {
        return <Modal toggle={this.close} isOpen={ this.props.isOpen }>
            <ModalHeader toggle={this.close}>Change password for { this.props.username }</ModalHeader>
            <ModalBody>
                <ChangePasswordForm username={this.props.username} />
            </ModalBody>
        </Modal>
    }
}

function mapStateToProps(state) {
    return {
        // user_id: usersSelector.getUid(state)
        // step: usersSelector.getStep(state)
    }
}

export default connect(mapStateToProps)(ChangePasswordModal)
