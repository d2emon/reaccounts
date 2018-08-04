'use strict'
import React, {Component} from 'react'
import {
    FormGroup,
    FormFeedback,
    Label,
    Input
} from 'reactstrap'
import FormField from "./FormField";

class EditField extends Component {
    constructor (props) {
        super(props)

        this.state = {
            value: this.props.value
        }
    }

    componentWillReceiveProps (nextProps, nextContext) {
        this.setState({ value: nextProps.value })
    }

    update (e) {
        this.setState({ value: e.target.value }, () => {
            if (!this.state.value) return
            if (this.state.value.indexOf('.') !== -1) throw Error('Invalid Data Field')
        })
    }

    render () {
        return <FormField
            {...this.props}
            type="text"
            value={this.state.value}
            onChange={this.update.bind(this)}
        />
    }
}

export default EditField
