/**
 * @desc Actions
 */
import {
    ERROR,
    HIDE_ERROR
} from "Actions/ErrorActions";

/**
 * @desc Utils
 */
import { MessageError } from 'Utils/Constants';

/**
 * @desc Initial State
 */
const InitialState = {
    showError: false,
    errorMessage: MessageError.APP_ERROR
};

/**
 * @desc Error reducer.
 *
 * @param { Object } state
 * @param { Object } action
 *
 * @return { Object }
 */
const ErrorReducer = (state = InitialState, action) => {

    switch (action.type) {

            case ERROR:
                return {
                    ...state,
                    showError: true,
                    errorMessage: action.payload
                }

        case HIDE_ERROR:
            return {
                ...state,
                showError: false,
            }

        default:
            return state

    }

}

export default ErrorReducer;
