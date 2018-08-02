import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap';

import * as usersActions from '../store/users/actions';
import * as usersSelector from '../store/users/reducer';

import Motd from "../containers/GMain/Motd";

import {
    STEP_MOTD,
    STEP_PLAY
} from "../store/users/steps";

class LoginModal extends Component {
    constructor (props) {
        super(props);

        this.close = this.close.bind(this);
    }

    close (e) {
        e.preventDefault();

        this.props.dispatch(usersActions.setStep({ step: STEP_PLAY }));
    }

    render () {
        return <Modal toggle={this.close} isOpen={ this.props.step === STEP_MOTD }>
            <ModalHeader toggle={this.close}>Message of the day</ModalHeader>
            <ModalBody>
                <Motd {...this.props} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.close}>Ok</Button>
            </ModalFooter>
        </Modal>

    }
}

function mapStateToProps(state) {
    return {
        step: usersSelector.getStep(state)
    };
}

export default connect(mapStateToProps)(LoginModal);
