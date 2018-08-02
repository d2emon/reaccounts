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
import * as errorsSelector from '../../store/errors/reducer';

function FormField ({ name, field, type, label, onChange }) {
    return <FormGroup>
        <Label for={ name }>{ label }</Label>
        <Input
            invalid={ !field.valid }
            type={ type }
            id={ name }
            name={ name }
            value={ field.value }
            onChange={ onChange }
        />
        <FormFeedback>{ field.error }</FormFeedback>
    </FormGroup>;
}

class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
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
        this.setState({[fieldName]: {
            value,
            valid: false,
            error: false
        }}, () => {
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
            <FormField
                name="username"
                label="By what name shall I call you?"
                field={this.state.username}
                type="text"
                onChange={this.handleUserInput}
            />
            <FormField
                name="password"
                label={passwordLabel}
                field={this.state.password}
                type="password"
                onChange={this.handleUserInput}
            />
            <Button type="submit" color="primary" disabled={!this.valid()} onClick={this.login}>Sign up</Button>
        </Form>;
    }
}

function mapStateToProps(state) {
    return {
        errors: errorsSelector.getErrors(state),
        // user: usersSelector.getUser(state),

        found: usersSelector.getUserFound(state),
        user_exists: !!usersSelector.getUserFound(state)
    };
}

export default connect(mapStateToProps)(LoginForm);
