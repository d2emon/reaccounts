'use strict'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    Form
} from 'reactstrap'

import FormField from '../components/FormField'

import * as usersActions from '../store/users/actions'

import * as usersSelector from "../store/users/reducer";

/**
 * For show user and edit user
 */
class ShowAccountForm extends Component {
    render () {
        if (!this.props.user) return <h4>No user registered in that name</h4>
        return <Form className="loginForm">
            <h4>User Data For {this.props.user.username}</h4>
            <FormField
                name="username"
                label="Name:"
                value={this.props.user.username}
                readOnly={true}
            />
            <FormField
                name="password"
                label="Password:"
                value={this.props.user.password}
                readOnly={true}
            />
        </Form>
    }
}

function mapStateToProps(state) {
    return {
        user: usersSelector.getSelectedUser(state)
    }
}

export default connect(mapStateToProps)(ShowAccountForm)
