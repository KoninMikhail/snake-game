import styled from 'styled-components';

export const LoaderOverlay = styled.div<{ show: boolean }>`
    display: grid;
    gap: ${(props) => props.theme.gaps.xl};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${(props) => props.theme.colors.black};
    opacity: ${({ show }) => (show ? `1` : '0')};
    visibility: ${({ show }) => (show ? `visible` : 'hidden')};
    transition: visibility 0.3s, opacity 0.9s linear;
    z-index: 9100;
`;
