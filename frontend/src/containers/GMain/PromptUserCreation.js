import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

import * as usersActions from '../../store/users/actions';
import * as usersSelector from "../../store/users/reducer";


/* If he/she doesnt exist */
class PromptUserCreation extends Component {
    constructor (props) {
        super(props);

        this.state = {
            visible: props.is_new
        };

        this.create = this.create.bind(this);
        this.close = this.close.bind(this);
    }

    componentWillReceiveProps (newProps) {
        this.setState({ visible: newProps.is_new });
    }

    create () {
        this.setState({ visible: false });
    }

    close (e) {
        e.preventDefault();
        this.props.dispatch(usersActions.beforeLogin({ user: '' }));
        /* Check name */
        this.setState({ visible: false });
    }

    render () {
        return <Modal isOpen={ this.state.visible } toggle={this.close}>
            <ModalHeader toggle={this.close}>{ this.props.username }</ModalHeader>
            <ModalBody>
                <p>Did I get the name right { this.props.username }?</p>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.create}>Yes</Button>{' '}
                <Button color="secondary" onClick={this.close}>No</Button>
            </ModalFooter>
        </Modal>
    }
}

function mapStateToProps(state) {
    return {
        // user: usersSelector.getUser(state),
    };
}

export default connect(mapStateToProps)(PromptUserCreation);
