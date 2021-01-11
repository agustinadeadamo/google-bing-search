/**
 * @desc Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

/**
 * @desc Styles
 */
import { ErrorMessageContainer } from './style';

/**
 * @desc Actions
 */
import { hideError } from 'Actions/ErrorActions';

/**
 * @desc Styled Components
 */
import { ButtonPrimary } from 'Mainstyles/Components.js';

const ErrorMessage = (props) => {

    // Destructuring props
    const {
        message,
    } = props;

    // Store
    const dispatch = useDispatch()

    /**
     * Function that is executed when on click in button hides error 
     */
    const onClickAcceptButton = () => {

        try {
            dispatch(hideError(false))
        } catch(error) {
            console.log(error)
        }

    }

    return (
        <ErrorMessageContainer data-testid="error-message-component">
                <p data-testid="message-error">{ message }</p>
                <div className="button-error-message-container">
                    <ButtonPrimary data-testid="button-error-message" onClick={() => onClickAcceptButton()}>Accept</ButtonPrimary>''
                </div>
        </ErrorMessageContainer>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

ErrorMessage.defaultProps = {
    message: ''
};

export default ErrorMessage;
