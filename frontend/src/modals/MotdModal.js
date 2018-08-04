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

import Motd from '../components/GMain/Motd'

import * as modalsSelector from '../store/modals/reducer'

import * as modalsActions from '../store/modals/actions'

class MotdModal extends Component {
    close (e) {
        e.preventDefault()
        this.props.dispatch(modalsActions.showMotdModal(false))
    }

    render () {
        return <Modal toggle={this.close.bind(this)} isOpen={ this.props.isOpen }>
            <ModalHeader toggle={this.close.bind(this)}>Message of the day</ModalHeader>
            <ModalBody>
                <Motd motd={this.props.motd} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.close.bind(this)}>Ok</Button>
            </ModalFooter>
        </Modal>
    }
}

function mapStateToProps(state) {
    return {
        isOpen: modalsSelector.isMotdOpen(state)
    }
}

export default connect(mapStateToProps)(MotdModal)

