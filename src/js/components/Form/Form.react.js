import React, {Component} from 'react'
import classNames from 'classnames'

import FieldSet from '../../styles/FieldSet'
import InputField from '../../styles/InputField'
import Button from '../../styles/Button'

export default class Form extends Component {
    constructor(props) {
        super(props)

        // immutable attributes
        this.schema = JSON.parse(props.schema)
        this.title = this.schema.title

        this.state = {
            fields: this.configureFields()
        }
    }

    /**
    *   No parameter
    *
    *   Configures the fields, checks validity
    **/
    configureFields() {
        let fields = {}

        for(let field in this.schema.fields) {
            fields[field] = this.schema.fields[field]
            fields[field].required = false
            fields[field].isValid = undefined
        }

        this.schema.required.forEach((field) => {
            fields[field].required = true
        })

        return fields
    }

    /**
    *
    *
    *
    **/
    render() {
        let fields = []
        let buttonEnabled = true

        for(let field in this.state.fields) {
            let className = classNames({
                'error': this.state.fields[field].isValid === false,
                'valid': this.state.fields[field].isValid === true
            })

            buttonEnabled = buttonEnabled && this.state.fields[field].isValid

            fields.push(
                <InputField
                key={field}
                name={field}
                placeholder={this.state.fields[field].placeholder}
                onChange={this.validateField}
                className={className}
                type={this.state.fields[field].type}
                />
            )
        }

        let buttonOptions = {
            label: 'Login',
            onClick: this.onSubmit
        }

        if(!buttonEnabled) {
            buttonOptions['disabled'] = 'disabled'
        }

        return (
            <FieldSet>
            <h4 className="h4">{this.title}</h4>
            {fields}
            <Button {...buttonOptions}/>
            </FieldSet>
        )
    }


    /*
    *   e {event}
    *
    *
    */
    validateField = (e) => {
        let fieldName = e.target.name
        let value = e.target.value
        let fields = this.state.fields

        fields[fieldName].value = value

        if(value.length === 0) {
            fields[fieldName].isValid = undefined
        }
        else {
            fields[fieldName].isValid = this.isFieldValid(fieldName, value)

            if(fields[fieldName].ref) {
                let isValid =
                fields[fieldName].value === fields[fields[fieldName].ref].value

                fields[fieldName].isValid = isValid
                fields[fields[fieldName].ref].isValid = isValid
            }
        }

        this.setState({
            fields: fields
        })
    }

    /**
    *
    *
    *
    **/
    isFieldValid(fieldName, value) {
        let field = this.state.fields[name]

        if(this.props.validators[fieldName]) {
            return this.props.validators[fieldName](value)
        }
        else {
            return undefined
        }
    }

    /**
    *
    *
    *
    **/
    onSubmit = () =>  {
        //create an objdct with the values of fields
        let values = {}
        for(let field in this.state.fields) {
            values[field] = this.state.fields[field].value
        }

        this.props.onSubmit(values)
    }
}
