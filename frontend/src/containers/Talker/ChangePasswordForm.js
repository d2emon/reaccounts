'user strict'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Form,
    FormGroup,
    FormFeedback,
    Label,
    Input
} from 'reactstrap'

import FormField from '../../components/FormField'

import * as usersActions from '../../store/users/actions'

import * as errorsSelector from '../../store/errors/reducer'
import * as usersSelector from '../../store/users/reducer'

class ChangePasswordForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            oldPassword: '',
            newPassword: '',
            verifyPassword: '',
        }
    }

    update (e) { this.setState({ [e.target.name]: e.target.value }) }

    changePassword (e) {
        e.preventDefault()

        this.props.dispatch(usersActions.changePassword({
            user: this.props.user,
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword,
            verifyPassword: this.state.verifyPassword
        }))
    }

    render () {
        return <Form className="loginForm">
            <FormField
                name="oldPassword"
                label="Old Password"
                error={this.props.errors.oldPassword}
                type="password"
                onChange={this.update.bind(this)}
            />
            <FormField
                name="newPassword"
                label="New Password"
                error={this.props.errors.newPassword}
                type="password"
                onChange={this.update.bind(this)}
            />
            <FormField
                name="verifyPassword"
                label="Verify Password"
                error={this.props.errors.verifyPassword}
                type="password"
                onChange={this.update.bind(this)}
            />
            <Button type="submit" color="primary" onClick={ this.changePassword.bind(this) }>Change</Button>
        </Form>
    }
}

function mapStateToProps(state) {
    return {
        // errors: errorsSelector.getErrors(state),
        // found: usersSelector.getUserFound(state),
        // user_exists: !!usersSelector.getUserFound(state)
        user: 'logscan(${nextProps.username})',
        errors: errorsSelector.getChangePasswordErrors(state)
    }
}

export default connect(mapStateToProps)(ChangePasswordForm)
