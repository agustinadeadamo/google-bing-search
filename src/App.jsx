/**
 * @desc Dependencies
 */
import React from 'react';
import { Provider } from 'react-redux';

/**
 * @desc Store
 */
import Store from './Config/Store';

/**
 * @desc Styled Components
 */
import { GlobalStyle } from './Mainstyles/GlobalStyle';

/**
 * @desc Components
 */
import Header from './Components/Header/Header';

/**
 * @desc Routes
 */
import Routes from './Config/Routes';

const App = () => (
    <>
        <Header />
        <GlobalStyle />
        <Provider store={Store}>
            <Routes />
        </Provider>
    </>
);

export default App;
