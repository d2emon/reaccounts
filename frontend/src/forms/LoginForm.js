'use strict'
import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Form
} from 'reactstrap'

import FormField from '../components/FormField'

import * as usersActions from '../store/users/actions'

import * as errorsSelector from '../store/errors/reducer'
import * as usersSelector from '../store/users/reducer'

import {
    STEP_PLAY
} from '../store/users/steps'

class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            fields: [
                'username',
                'password'
            ],
            username: props.username,
            password: '',
            exists: false
        }
    }

    componentWillReceiveProps (nextProps, nextContext) {
        console.log(nextProps)
        console.log(nextProps.errors)
        // this.setState({ exists: !!nextProps.user.data });
    }

    componentDidMount () {
        this.validate()
    }

    validate () {
        this.props.dispatch(usersActions.validateUser({
            username: this.state.username,
            password: this.state.password
        }));
        this.props.dispatch(usersActions.searchUser({
            username: this.state.username,
        }))
    }

    valid () {
        return !this.props.errors.username
            && !this.props.errors.password
    }

    update (e) {
        this.setState({ [e.target.name]: e.target.value })
        this.validate()
    }

    login (e) {
        e.preventDefault()

        /* this bit registers the new user */
        this.props.dispatch(usersActions.login({
            username: this.state.username,
            password: this.state.password
        }))

        if (this.props.user_exists) {
            console.log('exists')
        } else {
            console.log('not exists', this.state)
        }

        this.props.dispatch(usersActions.setUser({username: this.state.username}))
        this.props.dispatch(usersActions.setStep({step: STEP_PLAY}))
    }

    render () {
        let passwordLabel = (this.props.user_exists)
            ? <Fragment>This persona already exists, what is the password?</Fragment>
            : <Fragment>Creating new persona...<br />Give me a password for this persona</Fragment>

        return <Form className="loginForm">
            <FormField
                name="username"
                label="By what name shall I call you?"
                type="text"
                value={this.state.username}
                error={this.props.errors.username}
                onChange={this.update.bind(this)}
            />
            { /*old-error={this.props.errors.username}*/ }
            <FormField
                name="password"
                label={passwordLabel}
                type="password"
                value={this.state.password}
                error={this.props.errors.password}
                onChange={this.update.bind(this)}
            />
            { /*old-error={this.props.errors.password}*/ }
            <Button type="submit" color="primary" disabled={!this.valid()} onClick={this.login.bind(this)}>Sign up</Button>
        </Form>
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
