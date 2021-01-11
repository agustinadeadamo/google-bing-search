/**
 * @desc Dependencies
 */
import styled from "styled-components";

/**
 * @desc Variables
 */
import { Colors } from 'Mainstyles/Variables';

export const Select = styled.select`
    width: 100%;
    height: 36px;
    padding-left: 5px;
    padding-right: 30px;
    border: 1px solid ${Colors.grey};
    font-size: 14px;
    margin: 10px 0;

    option {
        width: 100%;
    }
`;