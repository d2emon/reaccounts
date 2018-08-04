'use strict'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    Form
} from 'reactstrap'

import FormField from '../components/FormField'

import * as usersActions from '../store/users/actions'

/**
 * Input user name
 */
class SearchAccountForm extends Component {
    constructor (props) {
        super(props)
        this.state = { username: '' }
    }

    update (e) {
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.props.dispatch(usersActions.searchUser({
                username: this.state.username,
            }))
        })
    }

    render () {
        return <Form className="loginForm">
            <FormField
                name="username"
                label="User Name:"
                type="text"
                onChange={this.update.bind(this)}
            />
        </Form>
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(SearchAccountForm)
