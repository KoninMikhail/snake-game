import styled from 'styled-components';

export const StyledBackgroundImage = styled.img.attrs((props) => ({
    src: props.src,
    alt: props.alt,
}))`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`;
