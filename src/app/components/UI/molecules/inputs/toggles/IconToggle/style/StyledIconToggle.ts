import styled from 'styled-components';

export const IconToggleContainer = styled.div<{ size: string }>`
    cursor: pointer;
    display: block;
    position: relative;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
`;

export const IconToggleIconHolder = styled.span<{ visible: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    opacity: ${({ visible }) => (visible ? '1' : '0')};
`;
