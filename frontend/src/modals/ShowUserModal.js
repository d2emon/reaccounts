'use strict'
import React, { Component } from 'react'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap'

import Getunm from "../containers/GMain/Getunm"
import Shu from "../components/GMain/Shu";

class ShowUserModal extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isOpen: props.isOpen
            name: 'getunm()'
        }
        let block = shu(name);
    }

    componentWillReceiveProps (nextProps) {
        this.setState({ isOpen: nextProps.isOpen });
    }

    close (e) {
        e.preventDefault();

        this.setState({ isOpen: false });
    }

    render () {
        return <Modal toggle={this.close} isOpen={ this.state.isOpen }>
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

export default ShowUserModal;
