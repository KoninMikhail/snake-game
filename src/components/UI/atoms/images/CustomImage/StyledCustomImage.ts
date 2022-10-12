import styled from 'styled-components';
import { ICustomImageProps } from './CustomImage';

export const StyledCustomImage = styled.img.attrs<ICustomImageProps>((props) => ({
  src: props.src,
  alt: props.alt || '',
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height || 'auto'};
`;
