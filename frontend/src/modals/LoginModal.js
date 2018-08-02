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

import PromptUserCreation from "../containers/GMain/PromptUserCreation";
import LoginForm from '../containers/GMain/LoginForm';

import {
    STEP_LOGIN,
    STEP_MOTD
} from "../store/users/steps";

class LoginModal extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            showPrompt: false,
        };

        this.close = this.close.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        console.log(nextProps);
        this.setState({
            username: nextProps.username
        }, () => {
            this.props.dispatch(usersActions.setUser({username: nextProps.username}));
        });
    }

    close (e) {
        e.preventDefault();

        this.props.dispatch(usersActions.setStep({ step: STEP_MOTD }));
    }

    render () {
        return <Modal isOpen={ this.props.step === STEP_LOGIN }>
            <ModalHeader>Sign Up { this.props.username }</ModalHeader>
            <ModalBody>
                <PromptUserCreation username={this.state.username} is_new={this.state.showPrompt} open={this.state.showPrompt} />
                <LoginForm username={this.props.username} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.close}>Ok</Button>
            </ModalFooter>
        </Modal>

    }
}

function mapStateToProps(state) {
    return {
        // user_id: usersSelector.getUid(state)
        step: usersSelector.getStep(state)
    };
}

export default connect(mapStateToProps)(LoginModal);
