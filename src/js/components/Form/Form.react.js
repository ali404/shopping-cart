import React, {Component} from 'react'
import classNames from 'classnames'

import FieldSet from '../../styles/FieldSet'
import InputField from '../../styles/InputField'
import Button from '../../styles/Button'

import Select from 'react-select'

import ErrorLogger from '../../stores/ErrorLoggerStore'

export default class Form extends Component {
    constructor(props) {
        super(props)

        // validate now, after setting the title and state
        this.validateForm(props.schema, props.validators)

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

        for(let fieldName in this.props.schema.fields) {
            let field = this.props.schema.fields[fieldName]

            fields[fieldName] = {}
            fields[fieldName].value = undefined
            fields[fieldName].isValid = false
            fields[fieldName].required = false

            if(
                field.type === 'select'
                || field.type === 'checkbox'
            ) {
                fields[fieldName].isValid = true
            }
        }

        this.props.schema.required.forEach(fieldName => {
            fields[fieldName].required = true
        })

        return fields
    }

    /**
    *
    *
    *
    *
    **/
    validateForm(schema, validators) {
        this.validateTitle(schema)
        this.validateFields(schema)
        this.validateRequiredFields(schema)
        this.validateValidators(validators)
    }

    /**
    *   schema {Object}
    *
    *   validates if the titles exists
    *   checks if the title is a string
    *
    *   Throws an error to the logger if the above fail
    *   Return true::{Boolean} if otherwise
    *
    **/
    validateTitle(schema) {
        if(
            !schema.title
            || typeof schema.title !== 'string'
        ) {
            ErrorLogger.throwFormSchemaValidationError(
                'Form Schema requires a `title` field of type String' +
                ' :: ' + schema.title + ' given'
            )
        }
        else {
            return true;
        }
    }

    /**
    *   schema {Object}
    *
    *   validates if the fields object exists
    *   checks if the fields object is actualyl an objcet
    *
    *   Throws an error to the logger if the above fail
    *   Calls the other validators and returns true
    *
    **/
    validateFields(schema) {
        if(
            !schema.fields
            || schema.fields.constructor !== Object) {

            ErrorLogger.throwFormSchemaValidationError(
                'Form Schema requires a `fields` field of type Object'
            )
            return false
        }
        else {
            this.validateFieldValues(schema.field)
            this.validateFieldNames(schema.field)
            this.validateFieldTypes(schema.fields)
            return true;
        }
    }

    /**
    *   fields {Object}
    *
    *   validates the object of the properties in field
    *   Each property should link to an object
    *
    *   Throws an error to the logger if the above fail
    *   Returns true {Boolean} if fields are objects
    *
    **/
    validateFieldValues(fields) {
        for(let fieldName in fields) {
            if(fields[fieldName].constructor !== Object) {
                ErrorLogger(
                    'Each field value in `fields` property of Form Schema should be an Object'
                )
                return false
            }
        }
        return true
    }

    /**
    *   fields {Object}
    *
    *   validates fields, each key should be a String
    *
    *   Throws an error to the logger if the above fail
    *   Returns true {Boolean} if each key in `fields` is a String
    *
    **/
    validateFieldNames(fields) {
        for(let fieldName in fields) {
            if(typeof fieldName !== 'string') {
                ErrorLogger.throwFormSchemaValidationError(
                    'Each field name specified as a key in Form Schema should be of type String'
                )
                return false
            }
        }

        return true
    }

    /**
    *   schema {Object}
    *
    *   Validates if required attribute exists
    *   If it does not, returns true
    *   In case it does:
    *       Checks if `required` is an Array
    *       Checks if every item in array is string
    *       Checks if every item in array is a field specified in `schema.fields`
    *
    *   Throws an error to the logger if the above fail
    *   Return true {Boolean} if it succeeds
    **/
    validateRequiredFields(schema) {
        if(schema.required) {
            if(schema.required.constructor === Array) {
                for(let i=0; i< schema.required.length; i++) {
                    let fieldName = schema.required[i]

                    if(typeof fieldName !== 'string') {
                        ErrorLogger.throwFormSchemaValidationError(
                            'Elements specified in `required` property' +
                            ' should be of type String'
                        )
                        return false
                    }
                    else if(!schema.fields[fieldName]) {
                        ErrorLogger.throwFormSchemaValidationError(
                            'The fields specified in the `required` property' +
                            ' should appear in `fields` property of the schema'
                        )
                        return false
                    }
                    else if(this.checkForDuplicates(
                        fieldName,
                        schema.required)
                    ) {
                        ErrorLogger.throwFormSchemaValidationError(
                            'Form Schema does not allow duplicate names in ' +
                            '`required` field'
                        )
                        return false
                    }
                    else {
                        // be happy, this field is ok
                    }
                }

                return true
            }
        }
    }

    /**
    *   element {Type}
    *   array {Array[Type]}
    *
    *   Checks if `element` is unique in `array`
    *
    *   Returns true {Boolean} if there are duplicates
    *   Returns false {Boolean} if it is unique
    *   Returns false {Boolean} if there is no `element` in `array`
    *
    **/
    checkForDuplicates(element, array) {
        let recurrences = 0
        for(let i=0; i<array.length; i++) {
            if(array[i] === element) {
                recurrences += 1
            }
        }

        return recurrences > 1
    }

    /**
    *   fields {Object}
    *
    *   Checks if the types of the field are specified,
    *   string, and valid HTML input type
    *
    *   Throws an error if the above are valid
    *   Return true {Boolean} if all fields have valid type
    *
    **/
    validateFieldTypes(fields) {
        let types = {
            'text': true,
            'password': true,
            'checkbox': true,
            'select': true
        }

        for(let fieldName in fields) {
            let field = fields[fieldName]
            if(!field.type && typeof field.type !== 'string') {
                ErrorLogger.throwFormSchemaValidationError(
                    'Fields should have a `type` property of type String'
                )
                return false
            }
            else {
                if(!types[field.type]) {
                    ErrorLogger.throwFormSchemaValidationError(
                        'Fields should have a valid HTML `type` property'
                    )
                    return false
                }
                else {
                    // be happy and continue
                }
            }
        }

        return true
    }

    /**
    *
    **/
    validateRefs(schema) {

    }

    /**
    *   validators {Object[Function]}
    *
    *   checks if every validator in `validators` is a Function
    *
    *   Throws an error if the above is valid
    *   Return true {Boolean} if the validators are valid
    *
    **/
    validateValidators(validators) {
        if(validators) {
            for(let fieldName in validators) {
                if(validators[fieldName] instanceof Function) {
                    // it's ok
                }
                else {
                    ErrorLogger.throwFormSchemaValidationError(
                        'Each validators should be of type Function'
                    )
                    return false
                }
            }

            return true
        }
    }


    componentWillReceiveProps(nextProps) {
        this.validateForm(nextProps.schema, nextProps.validators)
        this.setState({
            message: nextProps.message
        })
    }

    /**
    *
    *
    *
    **/
    render() {
        let fields = []
        let buttonEnabled = true

        // initialise fields based on props and state
        for(let fieldName in this.props.schema.fields) {
            let propsField = this.props.schema.fields[fieldName]
            let stateField = this.state.fields[fieldName]

            // check if checkbox
            switch(propsField.type) {
                case 'select':
                    if(propsField.items.length > 0) {
                        fields.push(
                            <Select
                                id={fieldName+'-field'}
                                value={stateField.value}
                                key={fieldName}
                                name={fieldName}
                                options={propsField.items}
                                onChange={this._changeSelectValue}
                            />
                        )
                    }
                break

                case 'checkbox':
                    fields.push(
                        <InputField
                            id={fieldName+'-field'}
                            key={fieldName}
                            name={fieldName}
                            placeholder={propsField.placeholder}
                            // change this into another function
                            // checkboxes do not have validators
                            onClick={this.validateField}
                            type={propsField.type}
                        />
                    )
                break

                // default is for text and password
                default:
                    buttonEnabled = buttonEnabled && stateField.isValid

                    let className = classNames({
                        'error': stateField.isValid === false,
                        'valid': stateField.isValid === true
                    })

                    fields.push(
                        <InputField
                            id={fieldName + "-field"}
                            key={fieldName}
                            name={fieldName}
                            placeholder={propsField.placeholder}
                            onChange={this.validateField}
                            className={className}
                            type={propsField.type}
                        />
                    )
                break
            }
        }

        // button label to be specified in schema
        let buttonOptions = {
            className: this.props.schema.title.replace(' ', '-') + '-button',
            label: this.props.schema.buttonLabel,
            onClick: this.onSubmit
        }

        if(!buttonEnabled) {
            buttonOptions['disabled'] = 'disabled'
        }

        return (
            <FieldSet>
                <h4 className="h4">{this.props.schema.title}</h4>
                {
                    this.state.message ? (
                        <p>{this.state.message}</p>
                    ) : null
                }
                {fields}
                <Button {...buttonOptions} />
            </FieldSet>
        )
    }

    _changeSelectValue = (e) => {
        let fields = this.state.fields
        fields[e.name].value = e.value

        this.setState({
            fields: fields
        })
    }


    /**
    *   e {event::Object{
    *        target::Object{
    *            name: String,
    *            value: String || checked: Boolen
    *        }
    *    }}
    *
    *   Validates field if the type of the field is `text` or `password`
    *   Validates this field if it has an appropriate validator
    *   If the field does not have a validator,
    *       it is valid if the length is bigger than 0
    *
    *   For checkbox type, it does not validation,
    *       It assignes to the field in the state variable the checked Boolean value
    *
    *
    *   Mutates the state property of this class
    *   Returns {undefined}
    *
    **/
    validateField = (e) => {
        // initialise variables
        let fieldName = e.target.name
        let value = e.target.value
        // variable used only when input type is checkbox
        let checked = e.target.checked

        // isolate `fields`, mutate this variable,
        // then mutate the state by setState
        let fields = this.state.fields


        // check if checkbox (there are no validators there)
        if(fields[fieldName].type === 'checkbox') {
            fields[fieldName].checked = checked
        }
        // else if(fields[fieldName].type === 'select') {
        //
        //
        // }
        else {
            // set the value for later use
            fields[fieldName].value = value

            //reject every field empty field
            if(value.length === 0) {
                fields[fieldName].isValid = false
            }
            else {
                if(this.props.validators && this.props.validators[fieldName]) {
                    fields[fieldName].isValid =
                        this.props.validators[fieldName](value)
                }
                else {
                    // we could've just set it straight true
                    // we already verified for empty inputs
                    fields[fieldName].isValid = value.length !== 0
                }

                // validate references
                if(fields[fieldName].ref) {
                    let isValid =
                    fields[fieldName].value
                        === fields[fields[fieldName].ref].value

                    fields[fieldName].isValid = isValid
                    fields[fields[fieldName].ref].isValid = isValid
                }
            }
        }

        this.setState({
            fields: fields,
            message: undefined
        })
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
