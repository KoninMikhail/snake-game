import styled from 'styled-components';

export const StyledInfoBox = styled.div`
    display: grid;
    gap: ${(props) => props.theme.gaps.md};
`;

export const StyledInfoBoxContent = styled.div<{ align: string }>`
    display: block;
    text-align: ${(props) => props.align};
`;
