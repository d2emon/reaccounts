import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Form,
    FormGroup,
    FormFeedback,
    Label,
    Input
} from 'reactstrap';

import * as usersActions from '../../store/users/actions';
import * as usersSelector from '../../store/users/reducer';
import CardBody from "reactstrap/src/CardBody";


const chkname = (args) => { console.log("CHKNAME", args); };
const validname = (args) => { console.log("VALIDNAME", args); return true; };


class LoginForm extends Component {
    constructor (props) {
        super(props);
        console.log(props);
        this.state = {
            namegiv: false,

            username: {
                value: props.username,
                valid: false,
                error: false
            },
            password: {
                value: '',
                valid: false,
                error: false
            },
            valid: false,
            exists: false
        };

        this.validateUsername = this.validateUsername.bind(this);
        this.validatePassword = this.validatePassword.bind(this);

        this.handleUserInput = this.handleUserInput.bind(this);
        this.login = this.login.bind(this);

        this.validate('username', props.username);
    }

    componentWillReceiveProps (newProps) {
        // console.log(newProps);
        // this.setState({ exists: !!newProps.data });
    }

    savePassword (uid, password) {
        let block = [
            uid,
            password,
            '',
            '',
            '',
            ''
        ];

        let fl = PFL.openlock("a");
        if (!fl) throw Error("No persona file....");

        let lump = qcrypt(block, block.length);
        fl.fprintf("%s\n", lump);
        fl.fclose();
    }

    validateUsername (value) {
        return new Promise(resolve => {
            // user = getkbd(15);
            this.setState({namegiv: false});

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

            this.props.dispatch(usersActions.findUser({ username: value }));

            resolve(true);
        });
    }

    /* Password checking */
    validatePassword (value) {
        return new Promise(resolve => {
            // logpass(this.state.username);

            if (!value) throw Error("Password is required");
            if (value.indexOf('.') > -1) throw Error("Illegal character in password");

            resolve(true);
        });
    }

    validate (fieldName, value) {
        // let fieldValidationErrors = this.state.formErrors;

        let field = this.state[fieldName];
        field.value = value;

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

        validator(value)
            .then(response => {
                field.valid = response;
                field.error = '';

                console.log(fieldName, field, value);
                this.setState({ [fieldName]: field });
            })
            .catch(e => {
                console.error(e);
                field.valid = false;
                field.error = e.message;

                console.log(fieldName, field, value);
                this.setState({ [fieldName]: field });
            });

    }

    valid () {
        return this.state.username.valid && this.state.password.valid;
    }

    userExists () {
        return !!this.props.data;
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.validate(name, value);
    }

    login (e) {
        e.preventDefault();

        this.validate('username', this.state.username.value);
        this.validate('password', this.state.password.value);

        if (this.userExists()) {
            console.log('exists');

            this.props.dispatch(usersActions.testPassword({
                block: scan({ user: newProps.username, start: 0, skip: "", stop: "."} ),
                pwd: scan({ user: newProps.password, start: 1, skip: "", stop: "." })
            }));
        } else {
            console.log('not exists');

            /* this bit registers the new user */
        }

        this.props.dispatch(usersActions.testPassword({ pwd: this.state.password }));

        this.props.dispatch(usersActions.setUser({username: this.state.username}));
        this.savePassword(this.state.username, this.state.password);
    }

    render () {
        let message = "";
        if (this.userExists()) {
            message = <div>This persona already exists, what is the password?</div>;
        } else {
            message = <div>
                <div>Creating new persona...</div>
                <div>Give me a password for this persona</div>
            </div>;
        }
        return <Form className="loginForm">
            <FormGroup>
                <Label for="username">By what name shall I call you?</Label>
                <Input
                    invalid={!this.state.username.valid}
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.username.value}
                    onChange={this.handleUserInput}
                />
                <FormFeedback>{this.state.username.error}</FormFeedback>
            </FormGroup>
            { message }
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    invalid={!this.state.password.valid}
                    type="password"
                    id="password"
                    name="password"
                    onChange={this.handleUserInput}
                />
                <FormFeedback>{this.state.password.error}</FormFeedback>
            </FormGroup>
            <Button type="submit" color="primary" disabled={!this.valid()} onClick={this.login}>Sign up</Button>
        </Form>;
    }
}


function mapStateToProps(state) {
    return {
        data: usersSelector.getUserData(state)
    };
}

export default connect(mapStateToProps)(LoginForm);
