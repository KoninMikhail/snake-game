import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const GameBoardContainer = styled.div`
    display: block;
    position: relative;
`;

export const GameBoardCellsArea = styled.div<{ size: number }>`
    display: grid;
    position: relative;
    grid-auto-flow: row;
    grid-template-columns: repeat(${({ size }) => size}, 1fr);
    grid-template-rows: repeat(${({ size }) => size}, 1fr);
    width: 78vw;
    height: 78vw;
    justify-self: center;

    ${up('sm')} {
        width: 60vw;
        height: 60vw;
    }

    ${up('md')} {
        width: 48vh;
        height: 48vh;
    }

    ${up('lg')} {
        width: 48vh;
        height: 48vh;
    }

    ${up('xl')} {
        width: 50vh;
        height: 50vh;
    }
`;

export const GameBoardModalHolder = styled.div<{ visible: boolean }>`
    display: block;
    position: absolute;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.visible ? '1' : '0')};
    width: 100%;
    height: 100%;
`;
