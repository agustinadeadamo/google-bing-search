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
import Dropdown from './Dropdown';

describe('[Dropdown Component]',() => {
  
    it('Renders correctly', () => {

        const {queryByTestId} = render(
            <Provider store={Store}>
                <Dropdown onChangeValue={() => {}} value=""/>
            </Provider>
        );

        expect(queryByTestId('dropdown-container')).toBeTruthy();

    });

    it('Matches snapshot', () => {
        
        const dropdown = create(
            <Provider store={Store}>
                <Dropdown onChangeValue={() => {}} value=""/>
            </Provider>
        ).toJSON;

        expect(dropdown).toMatchSnapshot();

    });

    it('Updates value on change', () => {

        // Select options
        let options = [
            {
                text: '1',
                value: 'val1'
            },
            {
                text: '2',
                value: 'val2'
            }
        ]

        // Mocks function
        const onChangeSelected = jest.fn();

        const {queryByTestId, getByTestId} = render(
            <Provider store={Store}>
                <Dropdown data={options} onChange={onChangeSelected} value="" />
            </Provider>
        );
        
        // Gets dropdown component
        const dropdownComponent = queryByTestId('dropdown-component');

        // Generates change event
        fireEvent.change(dropdownComponent, {target: {value: 'val1'}});

        expect(getByTestId("val1").selected).toBe(true);
        expect(getByTestId("val2").selected).toBe(false);

    });

    it('Shows correct label', () => {  
        
        const { getByText} = render(
            <Provider store={Store}>
                <Dropdown  label={English.SELECT_OPTION} onChange={() => {}} value="" />
            </Provider>
        );

        expect(getByText(English.SELECT_OPTION)).toBeInTheDocument();
    
    });

});