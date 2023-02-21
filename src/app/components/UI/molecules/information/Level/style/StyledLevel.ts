import styled from 'styled-components';

export const StyledLevel = styled.div`
    display: grid;
    grid-template-columns: min-content auto;
    gap: ${(props) => props.theme.gaps.md};
`;

export const StyledLevelCounter = styled.div`
    display: grid;
`;

export const StyledLevelLabel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;
