import React, {Component, Fragment} from 'react';
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


class LoginForm extends Component {
    constructor (props) {
        super(props);
        console.log(props);
        this.state = {
            namegiv: false,

            fields: [
                'username',
                'password'
            ],
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
            exists: false
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.login = this.login.bind(this);
    }

    componentWillReceiveProps (newProps) {
        console.log(newProps);
        // this.setState({ exists: !!newProps.user.data });

        this.state.fields.forEach(field => this.setField(field));
        if (newProps.errors) {
            newProps.errors.forEach(e => this.setField(e.param, e.msg));
        }
    }

    componentDidMount () {
        this.validate('username', this.props.username);
    }

    setField (fieldName, error) {
        if (error) console.error(error);

        let field = this.state[fieldName];
        if (!field) return;
        if (error && field.error) return;
        field.valid = !error;
        field.error = error;
        this.setState({ [fieldName]: field });
    }

    validate (fieldName, value) {
        this.setState({ [fieldName]: {
            value,
            valid: false,
            error: false
        } }, () => {
                this.props.dispatch(usersActions.validateUser({
                    username: this.state.username.value,
                    password: this.state.password.value
                }));
                this.props.dispatch(usersActions.searchUser({
                    username: this.state.username.value,
                }))
        });
    }

    valid () {
        return this.state.username.valid && this.state.password.valid;
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.validate(name, value);
    }

    login (e) {
        e.preventDefault();

        /*
        if (!user) {
            // If he/she doesnt exist
            res.json({ answer: `Did I get the name right ${user} ?` });
            let answer = fgets(79).toLowerCase()[0];
            if (answer === 'n') res.json({ answer: true });
            return;
        }
        */

        /* this bit registers the new user */
        this.props.dispatch(usersActions.login({
            username: this.state.username.value,
            password: this.state.password.value
        }));


        if (this.props.user_exists) {
            console.log('exists');
        } else {
            console.log('not exists', this.state);
        }

        this.props.dispatch(usersActions.setUser({username: this.state.username}));
    }

    render () {
        let passwordLabel = (this.props.user_exists)
            ? <Fragment>This persona already exists, what is the password?</Fragment>
            : <Fragment>Creating new persona...<br />Give me a password for this persona</Fragment>;

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
            <FormGroup>
                <Label for="password">{ passwordLabel }</Label>
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
        errors: usersSelector.getErrors(state),
        // user: usersSelector.getUser(state),

        found: usersSelector.getUserFound(state),
        user_exists: !!usersSelector.getUserFound(state)
    };
}

export default connect(mapStateToProps)(LoginForm);
