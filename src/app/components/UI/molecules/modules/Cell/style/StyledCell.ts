import styled, { css, keyframes } from 'styled-components';
import { CellType } from '@ui/molecules/modules/Cell/Cell.types';

const cellPuleAnimation = keyframes`
  0% {
    opacity: 0.8;
  }

  100% {
    opacity: 0;
  }
`;

export const StyledCell = styled.div`
    display: grid;
    align-items: stretch;
    justify-content: stretch;
    width: 100%;
    height: 100%;
    padding: 0.15em;
`;

export const StyledCellContent = styled.div<{ type?: CellType }>`
    display: block;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.black};

    ${({ type, theme }) =>
        type === 'snake' &&
        css`
            background: ${theme.colors.light};
        `}

    ${({ type, theme }) =>
        type === 'fruit' &&
        css`
            background: ${theme.colors.light};
            animation-name: ${cellPuleAnimation};
            animation-duration: 0.6s;
            animation-timing-function: ease-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-play-state: running;
        `}

  ${({ type, theme }) =>
        type === 'snakeHead' &&
        css`
            background: ${theme.colors.light};
        `}
`;
