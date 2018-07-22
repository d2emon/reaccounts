import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    FormFeedback,
    Label,
    Input
} from 'reactstrap';

import * as usersActions from '../../store/users/actions';
import * as usersSelector from '../../store/users/reducer';
import PromptUserCreation from "./PromptUserCreation";
import LoginForm from './LoginForm';


const scan = (args) => { console.log("SCAN", args); return args; };


class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            namegiv: 0,

            username: '',
            visible: false,

            create_user: false
        };
    }

    componentWillReceiveProps (newProps) {
        console.log(newProps);
        this.setState({
            username: newProps.username,
        }, () => {
            this.props.dispatch(usersActions.setUser({username: newProps.username}));
        });

        if (newProps.is_new) {
            this.props.dispatch(usersActions.testPassword({
                block: scan({ user: newProps.user, start: 0, skip: "", stop: "."} ),
                pwd: scan({ user: newProps.user, start: 1, skip: "", stop: "." })
            }));
        }
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
        user_id: usersSelector.getUid(state)
    };
}

export default connect(mapStateToProps)(Login);
