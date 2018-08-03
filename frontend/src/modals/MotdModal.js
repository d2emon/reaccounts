'use strict';
import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap';

import Motd from "../components/GMain/Motd";

class MotdModal extends Component {
    constructor (props) {
        super(props);

        this.state = { isOpen: props.isOpen };

        this.close = this.close.bind(this);
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
                <Motd motd={this.props.motd} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.close}>Ok</Button>
            </ModalFooter>
        </Modal>
    }
}

export default MotdModal;
