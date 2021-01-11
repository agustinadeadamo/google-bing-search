/**
 * @desc Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

/**
 * @desc Styles
 */
import { InputComponent } from './style';

/**
 * @desc Actions
 */
import { changeShowError } from 'Actions/ErrorActions';

/**
 * @desc Utils
 */
import { MessageError } from 'Utils/Constants';

const Input = (props) => {

  // Destructuring props
  const {
    value,
    maxLength,
    placeholder,
    type,
    onChangeValue,
    label
  } = props;

  // Store
  const dispatch =  useDispatch()

  /**
   * Function that is executed every time value in input changes
   * 
   * @param {EventTarget} event
   */
  const handleChange = (event) => {

        try {
            const valueInput = event.target.value;
            onChangeValue(valueInput);
        } catch(error) {
            dispatch(changeShowError(MessageError.APP_ERROR));
        }
  };

  return (
        <>
            
            <label>
                {label}
            </label>

            <InputComponent
                onChange={(event) => handleChange(event)}
                value={value}
                maxLength={maxLength}
                type={type}
                placeholder={placeholder}
                data-testid="input-component"
            />
        </>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChangeValue: PropTypes.func.isRequired,
  label: PropTypes.string
};

Input.defaultProps = {
  maxLength: 100,
  placeholder: '',
  type: 'text',
  value: '',
  onChangeValue: () => {}
};

export default Input;
