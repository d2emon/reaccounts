'use strict'
import React, {Component} from 'react'
import {
    FormGroup,
    FormFeedback,
    Label,
    Input
} from 'reactstrap'

class FormField extends Component {
    constructor (props) {
        super(props)

        this.state = {
            value: this.props.value
        }
    }

    componentWillReceiveProps (nextProps, nextContext) {
        this.setState({ value: nextProps.value })
    }

    render () {
        return <FormGroup>
            <Label for={ this.props.name }>{ this.props.label }</Label>
            <Input
                {...this.props}
                invalid={ !!this.props.error }
                id={ this.props.name }
                name={ this.props.name }
                value={ this.state.value }
            />
            <FormFeedback>{ this.props.error }</FormFeedback>
        </FormGroup>
    }
}

export default FormField
