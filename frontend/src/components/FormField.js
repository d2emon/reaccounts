'user strict'
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

    render () {
        return <FormGroup>
            <Label for={ this.props.name }>{ this.props.label }</Label>
            <Input
                invalid={ !!this.props.error }
                type={ this.props.type }
                id={ this.props.name }
                name={ this.props.name }
                defaultValue={ this.state.value }
                onChange={ this.props.onChange }
            />
            <FormFeedback>{ this.props.error }</FormFeedback>
        </FormGroup>
    }
}

export default FormField
