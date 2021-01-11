/**
 * @desc Dependencies
 */
import React from "react";
import PropTypes  from 'prop-types';
import { useDispatch } from "react-redux";

/**
 * @desc Style Components
 */
import { Select } from './style';

/**
 * @desc Actions
 */
import { changeShowError } from 'Actions/ErrorActions';

/**
 * @desc Utils
 */
import { MessageError } from 'Utils/Constants';

const DropDown = (props) => {

    // Destructuring props
    const {
        data,
        disabled,
        selected,
        label
    } = props;

    // Store
    const dispatch =  useDispatch()

    /**
     * @desc Event that get's value on onchange.
     * 
     * @param { EventTarget } event
     * 
     */
	const onChangeSelected = (event) => {

        try {
        
            if( event.target.value !== undefined && event.target.value !== ""){
                // Gets value selected
                const { value = "" } = event.target;              
                // Sends value selected
                props.onChange(value);    
            }

        } catch(error) {
            dispatch(changeShowError(MessageError.APP_ERROR));
        }

    }

    return (
        <div data-testid="dropdown-container">

            <label>
                {label}
            </label>

            <Select  
            data-testid="dropdown-component"
            value={selected}
            disabled={disabled}
            onChange={newSelected => onChangeSelected(newSelected)}
            onKeyDown={ e =>  props.onKeyDown && props.onKeyDown(e)}>
                {
                Array.isArray(data) && data.map((option) => {
                    return (<option data-testid={option.value} value={option.value} key={option.value}>{option.text}</option>);
                })
                }
            </Select>
        </div>
    
    )

}

DropDown.propTypes = {
    selected: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string
}

DropDown.defaultProps = {
  selected: '',
  data: [],
  onChange: () => {},
  disabled: false,
  label: '',
  onKeyDown: () => {}
};

export default DropDown;
