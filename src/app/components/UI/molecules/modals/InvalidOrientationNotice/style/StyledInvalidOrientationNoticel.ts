import styled from 'styled-components';

export const StyledInvalidOrientationNoticel = styled.div`
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background: ${(props) => props.theme.colors.black};
    bottom: 0;
    left: 0;
    z-index: 9111;
`;

export const StyledInvalidOrientationModalContainer = styled.div`
    display: grid;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2.5em;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9002;
`;

export const StyledInvalidOrientationModalContent = styled.div`
    display: grid;
    text-align: center;
    align-items: center;
    gap: ${({ theme }) => theme.gaps.lg};
`;
