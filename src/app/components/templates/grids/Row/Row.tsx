import styled from 'styled-components';
import { IRowProps } from '@templates/grids/Row/Row.interface';

export const Row = styled.div<IRowProps>`
    display: grid;
    grid-template-columns: ${({ templateColumns }) => templateColumns ?? '1fr'};
    gap: ${({ theme, gap }) => theme.gaps[gap ?? 'md']};

    ${({ columns }) =>
        columns &&
        `
        grid-template-columns: repeat(${columns}, 1fr);
  `}
`;
