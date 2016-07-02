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

        for(let fieldName in this.state.fields) {
            let field = this.state.fields[fieldName]

            if(field.isValid !== undefined) {
                buttonEnabled = buttonEnabled && field.isValid
            }

            let className = classNames({
                'error': field.isValid === false,
                'valid': field.isValid === true
            })

            fields.push(
                <InputField
                    id={fieldName + "-field"}
                    key={fieldName}
                    name={fieldName}
                    placeholder={field.placeholder}
                    onChange={this.validateField}
                    onClick={this.validateField}
                    className={className}
                    type={field.type}
                />
            )

        }

        // button label to be specified in schema
        let buttonOptions = {
            label: this.schema.buttonLabel,
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
        let checked = e.target.checked

        // isolate `fields`, mutate this variable, and then setState
        let fields = this.state.fields

        if(fields[fieldName].type === 'checkbox') {
            fields[fieldName].checked = checked
        }
        else {
            fields[fieldName].value = value

            if(value.length === 0) {
                fields[fieldName].isValid = undefined
            }
            else {
                if(this.props.validators && this.props.validators[fieldName]) {
                    fields[fieldName].isValid = this.isFieldValid(fieldName, value)    
                }

                // check refs
                if(fields[fieldName].ref) {
                    let isValid =
                    fields[fieldName].value === fields[fields[fieldName].ref].value

                    fields[fieldName].isValid = isValid
                    fields[fields[fieldName].ref].isValid = isValid
                }
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
        for(let fieldName in this.state.fields) {
            let field = this.state.fields[fieldName]

            if(field.type === 'checkbox') {
                values[fieldName] = field.checked
            }
            else {
                values[fieldName] = field.value
            }
        }

        this.props.onSubmit(values)
    }
}
