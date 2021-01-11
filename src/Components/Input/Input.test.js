/**
 * @desc Dependencies
 */
import { create } from 'react-test-renderer';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'

/**
 * @desc Config
 */
import Store from 'Config/Store';

/**
 * @desc Utils
 */
import { English } from 'Utils/en';

/**
 * @desc Components
 */
import Input from './Input';

describe('[Input Component]',() => {

    it('Renders correctly', () => {

        const {queryByTestId} = render(
            <Provider store={Store}>
                <Input onChangeValue={() => {}} value=""/>
            </Provider>
        );

        expect(queryByTestId('input-component')).toBeTruthy();
    
    });

    it('Matches snapshot', () => {

        const input = create(
            <Provider store={Store}>
                <Input onChangeValue={() => {}} value="" />
            </Provider>
        ).toJSON;

        expect(input).toMatchSnapshot();
    
    });

    it('Updates value on change', () => {

        // Mocks function
        const onChangeValue = jest.fn();

        const {queryByTestId} = render(<Provider store={Store}><Input onChangeValue={onChangeValue} value="" /></Provider>);
        
        // Gets input
        const inputComponent = queryByTestId('input-component');

        // Generates change event
        fireEvent.change(inputComponent, {target: {value: 'text'}});
        
        expect(onChangeValue).toHaveBeenCalledTimes(1);
        expect(onChangeValue).toHaveBeenCalledWith('text');
    
    });

    it('Shows correct label', () => {  
            
        const {getByText} = render(
            <Provider store={Store}>
                <Input label={English.ADD_VALUE_TO_SEARCH} onChangeValue={() => {}} value="" />
            </Provider>
        );

        expect(getByText(English.ADD_VALUE_TO_SEARCH)).toBeInTheDocument();

    });

});