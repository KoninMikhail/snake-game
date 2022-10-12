import styled from 'styled-components';
import { IBackgroundImageProps } from './BackgroundImage';

export const StyledBackgroundImage = styled.div<IBackgroundImageProps>`
  background-image: url(${({ src }) => src});
  background-position: ${({ position }) => position || 'center center'};
  background-size: ${({ size }) => size || 'cover'};
  width: inherit;
  height: inherit;
`;
