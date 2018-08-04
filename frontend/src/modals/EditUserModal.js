'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form
} from 'reactstrap'

import SearchAccountForm from '../forms/SearchAccountForm'
import EditField from '../components/EditField'

import * as modalsSelector from '../store/modals/reducer'
import * as usersSelector from '../store/users/reducer'

import * as modalsActions from '../store/modals/actions'

class EditUserModal extends Component {
    close (e) {
        e.preventDefault()
        this.props.dispatch(modalsActions.showEditUserModal(false))
    }

    render () {
        let user = this.props.user || {
            username: name,
            password: 'default',
            data3: 'E'
        }
        /*
        delu2(name)
        let fl = openlock(PFL, "a")
        if (!fl) return
        fl.fprintf(qcrypt(bk2))
        fl.fclose()
        */

        return <Modal toggle={this.close.bind(this)} isOpen={ this.props.isOpen }>
            <ModalHeader toggle={this.close.bind(this)}>Editing : {this.props.user.username}</ModalHeader>
            <ModalBody>
                <SearchAccountForm />
                <Form>
                    <EditField label="Name:" value={this.props.user.username} />
                    <EditField label="Password:" value={this.props.user.password} />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.close.bind(this)}>Hit Return...</Button>
            </ModalFooter>
        </Modal>
    }
}

function mapStateToProps(state) {
    return {
        isOpen: modalsSelector.isEditUserModalOpen(state),
        user: usersSelector.getSelectedUser(state)
    }
}

export default connect(mapStateToProps)(EditUserModal)
