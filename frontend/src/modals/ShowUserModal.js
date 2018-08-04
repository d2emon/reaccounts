'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap'

import ChangePasswordForm from '../containers/Talker/ChangePasswordForm'
import Getunm from "../containers/GMain/Getunm"
import Shu from "../components/GMain/Shu";

import * as modalsSelector from '../store/modals/reducer'

import * as modalsActions from '../store/modals/actions'

class ShowUserModal extends Component {
    constructor (props) {
        super(props)

        this.state = {
            name: 'getunm()'
        }
    }

    close (e) {
        e.preventDefault()
        this.props.dispatch(modalsActions.showShowUserModal(false))
    }

    render () {
        return <Modal toggle={this.close.bind(this)} isOpen={ this.props.isOpen }>
            <ModalHeader toggle={this.close.bind(this)}>Change password for { this.props.user.username }</ModalHeader>
            <ModalBody>
                <ChangePasswordForm user={this.props.user} />
            </ModalBody>

            <ModalHeader toggle={this.close}>Message of the day</ModalHeader>
            <ModalBody>
                <Getunm value={this.state.name} />
                <Shu name={this.state.name} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.close.bind(this)}>Hit Return...</Button>
            </ModalFooter>
        </Modal>
    }
}

function mapStateToProps(state) {
    return {
        isOpen: modalsSelector.isShowUserModalOpen(state)
    }
}

export default connect(mapStateToProps)(ShowUserModal)
