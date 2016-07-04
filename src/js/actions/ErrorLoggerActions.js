import AppDispatcher from '../dispatcher/AppDispatcher'
import ErrorConstants from '../constants/ErrorConstants'

export default class ErrorLoggerActions {
    static throwFormSchemaValidationError(message) {
        AppDispatcher.dispatch({
            actionType: ErrorConstants.ERR_FORM_SCHEMA_VALIDATION,
            message: message
        })
    }
}
