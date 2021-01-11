/**
 * @desc Dependencies
 */
import styled from "styled-components";

/**
 * @desc Variables
 */
import { Colors } from 'Mainstyles/Variables';

export const Spinner = styled.div`
    border: 1px solid ${Colors.lightenGrey};
    border-top: 1px solid ${Colors.black};
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 2s linear infinite;
    position: relative;
    z-index: 100;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const LoaderComponent = styled.div`
    position: relative;
    width: 70px;
    margin: 20px auto;
`;