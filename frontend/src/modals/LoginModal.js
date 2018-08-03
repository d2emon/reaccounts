import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';

import * as usersActions from '../store/users/actions';
import * as usersSelector from '../store/users/reducer';

import PromptUserCreation from "../containers/GMain/PromptUserCreation";
import LoginForm from '../containers/GMain/LoginForm';

class LoginModal extends Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            showPrompt: false,
        };
    }

    componentWillReceiveProps (nextProps) {
        console.log(nextProps);
        this.setState({
            username: nextProps.username
        }, () => {
            this.props.dispatch(usersActions.setUser({username: nextProps.username}));
        });
    }

    render () {
        return <Modal isOpen={ this.props.isOpen }>
            <ModalHeader>Sign Up { this.props.username }</ModalHeader>
            <ModalBody>
                <PromptUserCreation username={this.state.username} is_new={this.state.showPrompt} open={this.state.showPrompt} />
                <LoginForm username={this.props.username} />
            </ModalBody>
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
