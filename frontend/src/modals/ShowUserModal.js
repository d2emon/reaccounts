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

import SearchAccountForm from "../forms/SearchAccountForm";
import ShowAccountForm from "../forms/ShowAccountForm";

import * as modalsSelector from '../store/modals/reducer'

import * as modalsActions from '../store/modals/actions'

class ShowUserModal extends Component {
    constructor (props) {
        super(props)

        this.state = {
            name: 'getunm()'
        }
    }

    componentWillReceiveProps (nextProps, nextContext) {
        console.log(nextProps, nextContext)
    }

    close (e) {
        e.preventDefault()
        this.props.dispatch(modalsActions.showShowUserModal(false))
    }

    render () {
        return <Modal toggle={this.close.bind(this)} isOpen={ this.props.isOpen }>
            <ModalHeader toggle={this.close.bind(this)}>Show { this.state.name }</ModalHeader>
            <ModalBody>
                <SearchAccountForm value={this.state.name} />
                <ShowAccountForm name={this.state.name} />
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
