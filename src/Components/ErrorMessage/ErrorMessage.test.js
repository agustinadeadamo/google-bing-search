/**
 * @desc Dependencies
 */
import { create } from 'react-test-renderer';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

/**
 * @desc Config
 */
import Store from 'Config/Store';

/**
 * @desc Utils
 */
import { MessageError } from 'Utils/Constants';

/**
 * @desc Components
 */
import ErrorMessage from './ErrorMessage';

describe('[Error Message Component]',() => {

    it('Renders correctly', () => {

        const {queryByTestId} = render(
            <Provider store={Store}>
                <ErrorMessage message={MessageError.APP_ERROR}/>
            </Provider>
        );

        expect(queryByTestId('error-message-component')).toBeTruthy();
    
    });

    it('Matches snapshot', () => {
        
        const input = create(
            <Provider store={Store}>
                <ErrorMessage message={MessageError.APP_ERROR}/>
            </Provider>
        ).toJSON;

        expect(input).toMatchSnapshot();
        
    });

    it('Shows app error message', () => {

        const {getByText} = render(
            <Provider store={Store}>
                <ErrorMessage message={MessageError.APP_ERROR}/>
            </Provider>
        );

        expect(getByText(MessageError.APP_ERROR)).toBeInTheDocument();
    
    });

    it('Shows server error message', () => {

        const {getByText} = render(
            <Provider store={Store}>
                <ErrorMessage message={MessageError.SERVER_ERROR}/>
            </Provider>
        );

        expect(getByText(MessageError.SERVER_ERROR)).toBeInTheDocument();
    
    });
});