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


const chkname = (args) => { console.log("CHKNAME", args); };
const validname = (args) => { console.log("VALIDNAME", args); return true; };
const logpass = (args) => { console.log("LOGPASS", args); };
const logscan = (args) => { console.log("LOGSCAN", args); };


class Login extends Component {
    constructor (props) {
        super(props);
        console.log(props);
        this.state = {
            namegiv: 0,

            username: '',
            password: '',
            formErrors: {username: '', password: ''},
            valid: {username: false, password: false},

            visible: false
        };

        this.validateUsername = this.validateUsername.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount () {
        let {user} = this.props;
        this.props.dispatch(usersActions.beforeLogin({user, ...this.props}));
    }

    componentWillReceiveProps (newProps) {
        this.setState({
            username: newProps.user,
            visible: false
        }, () => {
            this.validateField('username', newProps.user);
        });
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value) });
    }

    validateUsername (value) {
        // user = getkbd(15);
        this.state.namegiv = 0;
        /*
         * Check for legality of names
         */
        if (!value) throw Error("Username is required");
        if (value.indexOf('.') > -1) throw Error("Illegal characters in user name");
        value = value.trim();
        // scan(user, user, 0, " ", "");
        if (!value) throw Error("Username is required");
        chkname(value);
        if (!value) throw Error("Username is required");

        /* Gets name tidied up */
        if (!validname(value)) throw Error("Bye Bye");
        return true;
    }

    validatePassword () {
        logpass(this.state.username);
        /* Password checking */
        return true;
    }

    validateField (fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let valid = this.state.valid;
        let validator = undefined;
        switch (fieldName) {
            case 'username':
                validator = this.validateUsername;
                break;
            case 'password':
                validator = this.validatePassword;
                break;
            default:
                break;
        }
        if (!validator) return;
        try {
            valid[fieldName] = validator(value);
            fieldValidationErrors[fieldName] = '';
        } catch (e) {
            // console.error(e);
            valid[fieldName] = false;
            fieldValidationErrors[fieldName] = e.message;
        }
        this.setState({
            [fieldName]: value,
            formErrors: fieldValidationErrors,
            valid: valid
        });
    }

    login (e) {
        e.preventDefault();

        let user = this.props.user;
        this.setState({ visible: logscan({user}) === undefined });
    }

    formValid () {
        return this.state.valid.username && this.state.valid.password;
    }

    render () {
        if (this.props.is_banned) {
            return <h3>I'm sorry- that userid has been banned from the Game</h3>
        }
        return <Card>
            <PromptUserCreation username={this.state.username} is_new={this.state.visible} />
            <CardBody>
                <CardTitle>Sign Up</CardTitle>
                <Form className="loginForm">
                    <FormGroup>
                        <Label for="username">By what name shall I call you?</Label>
                        <Input invalid={!this.state.valid.username} type="text" name="username" id="username" value={this.state.username} onChange={this.handleUserInput} />
                        <FormFeedback>{this.state.formErrors.username}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input invalid={!this.state.valid.password} type="password" name="password" id="password" onChange={this.handleUserInput}/>
                        <FormFeedback>{this.state.formErrors.password}</FormFeedback>
                    </FormGroup>
                    <Button type="submit" color="primary" disabled={!this.formValid()} onClick={this.login}>Sign up</Button>
                </Form>
            </CardBody>
        </Card>
    }
}

function mapStateToProps(state) {
    return {
        user: usersSelector.getUser(state),
        is_banned: usersSelector.isBanned(state)
    };
}

export default connect(mapStateToProps)(Login);
