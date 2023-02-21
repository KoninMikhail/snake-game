import styled from 'styled-components';

export const StyledPauseModal = styled.div`
    position: absolute;
    display: grid;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 15px;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 5000;
    height: 100%;
    background: ${(props) => props.theme.colors.black};
`;

export const StyledPauseModalContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.gaps.lg};
`;
