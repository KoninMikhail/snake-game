import styled from 'styled-components';

export const StyledFitWidthImage = styled.img.attrs((props) => ({
    src: props.src,
    alt: props.alt,
}))`
    width: 100%;
    height: auto;
`;
