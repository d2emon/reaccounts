'use strict'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Form
} from 'reactstrap'

import FormField from '../components/FormField'

import * as usersActions from '../store/users/actions'

import * as errorsSelector from '../store/errors/reducer'

/**
 * Input user name
 */
class SearchAccountForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            username: ''
        }
    }

    update (e) {
        this.setState({ [e.target.name]: e.target.value }, () => {
            /*
            this.props.dispatch(usersActions.changePassword({
                user: this.props.user,
                oldPassword: this.state.oldPassword,
                newPassword: this.state.newPassword,
                verifyPassword: this.state.verifyPassword
            }))
            */
        })
    }

    render () {
        return <Form className="loginForm">
            <FormField
                name="username"
                label="User Name:"
                error={this.props.errors.username}
                type="text"
                onChange={this.update.bind(this)}
            />
        </Form>
    }
}

function mapStateToProps(state) {
    return {
        errors: errorsSelector.getChangePasswordErrors(state)
    }
}

export default connect(mapStateToProps)(SearchAccountForm)
