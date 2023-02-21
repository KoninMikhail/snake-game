import styled from 'styled-components';

export const StyledStartBox = styled.div`
    display: grid;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const StyledStopBoxContentHolder = styled.div`
    display: grid;
    gap: ${({ theme }) => theme.gaps.xl};
    justify-content: center;
    align-items: center;
`;

export const StyledStartBoxImageContainer = styled.div`
    display: grid;
    align-items: center;
    width: inherit;
    margin: 0 auto;
`;

export const StyledStartBoxMessageContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    min-height: calc(${({ theme }) => theme.typography.fontSize.caption} * 3);
`;
