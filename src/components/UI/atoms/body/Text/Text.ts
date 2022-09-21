import styled from 'styled-components';
import {
  font_color,
  font_family_body,
  font_size_body,
  font_size_body_desktop,
} from '../../../../../styles/variables';
import { up } from 'styled-breakpoints';

/**
 * Text
 *
 * @description Use for label content
 *
 * @returns {JSX.Element}
 */
export const Text = styled.p`
  font-size: ${font_size_body};
  font-family: ${font_family_body};
  font-weight: normal;
  color: ${font_color};

  ${up('xl')} {
    font-size: ${font_size_body_desktop};
  }
`;
