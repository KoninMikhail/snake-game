import styled from 'styled-components';

export const StyledCountdownModal = styled.div`
    position: absolute;
    display: grid;
    top: 0;
    left: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    padding: 15px;
    width: 100%;
    z-index: 9010;
    height: 100%;
    background: ${(props) => props.theme.colors.black};
`;

export const StyledCountdownModalContent = styled.div`
    display: grid;
    gap: ${(props) => props.theme.gaps.lg};
`;
