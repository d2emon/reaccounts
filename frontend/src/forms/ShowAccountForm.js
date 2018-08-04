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
 * For show user and edit user
 */
class ShowAccountForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            block: { username: 'unm', password: 'pwd' } // logscan(props.name)
        }
    }

    render () {
        if (!this.state.block) return <h4>No user registered in that name</h4>
        return <Form className="loginForm">
            <h4>User Data For {this.props.name}</h4>
            <FormField
                name="username"
                label="Name:"
                value={this.state.block.username}
                readOnly={true}
            />
            <FormField
                name="password"
                label="Password:"
                value={this.state.block.password}
                readOnly={true}
            />
        </Form>
    }
}

function mapStateToProps(state) {
    return {
        errors: errorsSelector.getChangePasswordErrors(state)
    }
}

export default connect(mapStateToProps)(ShowAccountForm)
