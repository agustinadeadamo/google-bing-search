/**
 * @desc Dependencies
 */
import React from 'react';

/**
 * @desc Utils
 */
import { English } from 'Utils/en';


/**
 * @desc Styles
 */
import { HeaderContainer } from './style';

const Header = () => (
        <HeaderContainer>
            <h1> {English.GOOGLE_BING_SEARCH} </h1>
        </HeaderContainer>
  );

export default Header;
