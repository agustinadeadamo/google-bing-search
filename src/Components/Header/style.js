/**
 * @desc Dependencies
 */
import styled from 'styled-components';

/**
 * @desc Variables
 */
import { Colors } from 'Mainstyles/Variables';

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: ${Colors.grey};
    padding: 30px 0;
    text-align: center;

    h1 {
        color: ${Colors.white};
    }
`;
