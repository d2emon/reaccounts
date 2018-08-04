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

class ChangePasswordForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            fields: [

                'oldPassword',
                'newPassword',
                'verifyPassword'
            ],
            oldPassword: {
                value: '',
                error: false
            },
            newPassword: {
                value: '',
                error: false
            },
            verifyPassword: {
                value: '',
                error: false
            }
        }

        // this.handleInput = this.handleInput.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    componentWillReceiveProps (nextProps, nextContext) {
        console.log(nextProps)
        let user = logscan(nextProps.username)

        this.state.fields.forEach(fieldName => {
            let field = this.state[fieldName]
            if (!field) return

            field.valid = true
            field.error = false
            if (!nextProps.errors) return this.setState({ [fieldName]: field })
            // this.setField(field, nextProps.errors[field])

            let error = nextProps.errors[fieldName]
            if (!error) return this.setState({ [fieldName]: field })

            console.error(fieldName, error)

            if (error && field.error) return
            field.valid = !error
            field.error = error
            this.setState({ [fieldName]: field })
        })
    }

    validate (fieldName, value) {
        this.setState({[fieldName]: {
                value,
                error: false
            }}, () => {
                // TODO: Move it to backend
                /*
                if (!this.props.user) throw Error('No user')
                if (this.state.oldPassword.value !== this.props.user.password) throw Error('Incorrect Password')
                if (!this.state.newPassword.value) throw Error('')
                if (this.state.newPassword.value.indexOf(',')) throw Error('Illegal Character in password')
                if (this.state.newPassword.value !== this.state.verifyPassword.value) throw Error('NO!')
                */
            })
    }

    valid () {
        return !this.state.oldPassword.error
            && !this.state.newPassword.error
            && !this.state.verifyPassword.error
    }

    update (e) {
        let field = this.state[e.target.name]
        field.value = e.target.value
        this.setState({ [e.target.name]: field })
    }

    changePassword (e) {
        e.preventDefault()
        // TODO: Move it to backend
        this.validate('oldPassword', this.state.oldPassword.value)
        this.validate('newPassword', this.state.newPassword.value)
        this.validate('verifyPassword', this.state.verifyPassword.value)
        console.log(
            this.state.oldPassword.value,
            this.state.newPassword.value,
            this.state.verifyPassword.value
        )
        /*
        delu2(this.props.username)

        // delete me and tack me on end!
        let fl = openlock(PFL, "a")
        fl.fprintf(fl.qcrypt(this.props.user))
        fl.fclose(fl)
        */
    }

    render () {
        return <Form className="loginForm">
            { /* onChange={this.handleInput} */ }
            <FormField
                name="oldPassword"
                label="Old Password"
                error={this.state.oldPassword.error}
                type="password"
                onChange={this.update.bind(this)}
            />
            <FormField
                name="newPassword"
                label="New Password"
                error={this.state.newPassword.error}
                type="password"
                onChange={this.update.bind(this)}
            />
            <FormField
                name="verifyPassword"
                label="Verify Password"
                error={this.state.verifyPassword.error}
                type="password"
                onChange={this.update.bind(this)}
            />
            <Button type="submit" color="primary" disabled={!this.valid()} onClick={this.changePassword}>Change</Button>
        </Form>
    }
}

function mapStateToProps(state) {
    return {
        // errors: errorsSelector.getErrors(state),
        // found: usersSelector.getUserFound(state),
        // user_exists: !!usersSelector.getUserFound(state)
    }
}

export default connect(mapStateToProps)(ChangePasswordForm)
