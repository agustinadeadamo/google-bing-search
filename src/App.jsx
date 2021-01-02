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
import GlobalStyle from './MainStyles/GlobalStyle';

/**
 * @desc Routes
 */
import Routes from './Config/Routes.jsx';

const App = () => (
  <>
    <GlobalStyle />
    <Provider store={Store}>
      <Routes />
    </Provider>
  </>
);

export default App;
