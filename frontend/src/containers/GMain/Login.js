import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

import * as usersActions from '../../store/users/actions';

import PromptUserCreation from "./PromptUserCreation";
import LoginForm from '../../forms/LoginForm';


class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            visible: false,
        };
    }

    componentWillReceiveProps (nextProps) {
        console.log(nextProps);
        this.setState({
            username: nextProps.username,
        }, () => {
            this.props.dispatch(usersActions.setUser({username: nextProps.username}));
        });
    }

    render () {
        return <Card>
            <PromptUserCreation username={this.state.username} is_new={this.state.visible} open={this.state.visible} />
            <CardBody>
                <CardTitle>Sign Up</CardTitle>
                <LoginForm username={this.props.username} />
            </CardBody>
        </Card>
    }
}

function mapStateToProps(state) {
    return {
        // user_id: usersSelector.getUid(state)
    };
}

export default connect(mapStateToProps)(Login);
