import styled from 'styled-components';
import {
  font_color,
  font_family_body,
  font_size_body,
  font_size_body_desktop,
} from '../../../../../styles/variables';
import { up } from 'styled-breakpoints';
import { ITextProps } from './Text';

export const StyledText = styled.p<ITextProps>`
  font-size: ${font_size_body};
  font-family: ${font_family_body};
  font-weight: normal;
  color: ${font_color};

  ${up('xl')} {
    font-size: ${font_size_body_desktop};
  }
`;
