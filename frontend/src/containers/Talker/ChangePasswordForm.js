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
    </FormGroup>
}

class ChangePasswordForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            fields: [
                'oldPassword',
                'newPassword',
                'validatePassword'
            ],
            oldPassword: {
                value: '',
                error: false
            },
            newPassword: {
                value: '',
                error: false
            },
            validatePassword: {
                value: '',
                error: false
            }
        }

        this.handleInput = this.handleInput.bind(this)
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
                if (this.state.oldPassword.value !== this.state.user.password) throw Error('Incorrect Password')
                if (!this.state.newPassword.value) throw Error('')
                if (this.state.newPassword.value.indexOf(',')) throw Error('Illegal Character in password')
                if (this.state.newPassword.value !== this.state.validatePassword.value) throw Error('NO!')
            })
    }

    valid () {
        return !this.state.oldPassword.error
            && !this.state.newPassword.error
            && !this.state.validatePassword.error
    }

    handleInput (e) {
        this.validate(e.target.name, e.target.value)
    }

    changePassword (e) {
        e.preventDefault()
        // TODO: Move it to backend
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
            <FormField
                name="oldPassword"
                label="Old Password"
                field={this.state.oldPassword}
                type="password"
                onChange={this.handleUserInput}
            />
            <FormField
                name="newPassword"
                label="New Password"
                field={this.state.newPassword}
                type="password"
                onChange={this.handleUserInput}
            />
            <FormField
                name="verifyPassword"
                label="Verify Password"
                field={this.state.verifyPassword}
                type="password"
                onChange={this.handleUserInput}
            />
            <Button type="submit" color="primary" disabled={!this.valid()} onClick={this.changePassword}>Sign up</Button>
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
