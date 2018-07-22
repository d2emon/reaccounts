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
const gepass = (args) => { console.log("GEPASS", args); return args.block; };
const scan = (args) => { console.log("SCAN", args); return args; };


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

            visible: false,

            create_user: false
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
            visible: newProps.is_new
        }, () => {
            this.validateField('username', newProps.user);
        });

        if (newProps.is_new) {
            this.props.dispatch(usersActions.testPassword({
                block: scan({ user: newProps.user, start: 0, skip: "", stop: "."} ),
                pwd: scan({ user: newProps.user, start: 1, skip: "", stop: "." })
            }));
        } else {
            /* this bit registers the new user */
            this.setState({ create_user: true }, () => { this.validatePassword(); });
        }
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

    /* Password checking */
    validatePassword (value) {
        // logpass(this.state.username);

        let block = gepass("block");

        if (any('.', block)) throw Error("Illegal character in password");
        if (!block.length) throw Error("Password is required");

        let uid = pwd;
        block = uid + "." + block + "....";

        let fl = openlock(PFL, "a");
        if (!fl) throw Error("No persona file....");

        let lump = qcrypt(block, block.length);
        block = lump;
        fprintf(fl, "%s\n", block);
        fclose(fl);

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

        this.props.dispatch(usersActions.beforeLogin({ user: this.props.user }));
        this.props.dispatch(usersActions.logpass({ user: this.props.user }));
        this.props.dispatch(usersActions.testPassword({ pwd: this.state.password }));
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
                        { !this.props.is_new && <FormFeedback>This persona already exists, what is the password?</FormFeedback> }
                    </FormGroup>
                    <Button type="submit" color="primary" disabled={!this.formValid()} onClick={this.login}>Sign up</Button>
                </Form>

                { this.state.create_user && <div>
                    <div>Creating new persona...</div>
                    <div>Give me a password for this persona</div>
                </div> }
                <hr />
            </CardBody>
        </Card>
    }
}

function mapStateToProps(state) {
    return {
        user: usersSelector.getUser(state),
        is_banned: usersSelector.isBanned(state),
        is_new: usersSelector.isNew(state)
    };
}

export default connect(mapStateToProps)(Login);
