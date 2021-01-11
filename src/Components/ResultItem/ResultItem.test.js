/**
 * @desc Dependencies
 */
import { create } from 'react-test-renderer';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'

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
import ResultItem from './ResultItem';

describe('[Result Component]',() => {

    it('Renders correctly', () => {

        const {queryByTestId} = render(
            <Provider store={Store}>
                <ResultItem />
            </Provider>
        );

        expect(queryByTestId('result')).toBeTruthy();
    
    });

    it('Matches snapshot', () => {

        const result = create(
            <Provider store={Store}>
                <ResultItem/>
            </Provider>
        ).toJSON;

        expect(result).toMatchSnapshot();
    
    });

    it('Shows correct content', () => {

        // Define values
        let link = 'link test'
        let title = 'title test'
        let snippet = 'snippet test'

        const {getByTestId } = render(
            <Provider store={Store}>
                <ResultItem link={link} title={title} snippet={snippet} message={MessageError.APP_ERROR}/>
            </Provider>
        );
        
        expect(getByTestId('link')).toHaveTextContent(link);
        expect(getByTestId('title')).toHaveTextContent(title);
        expect(getByTestId('snippet')).toHaveTextContent(snippet);

    });

});