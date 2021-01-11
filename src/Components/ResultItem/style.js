/**
 * @desc Dependencies
 */
import styled from "styled-components";

/**
 * @desc Variables
 */
import { Colors } from 'Mainstyles/Variables';

export const ResultItemComponent = styled.div`
    margin: 20px;

    .link {
        font-size: 12px;
        margin-bottom: 5px;
    }

    .title {
        font-size: 18px;
        color: ${Colors.black};
    }

    .snippet {
        font-size: 14px;
    }
`;