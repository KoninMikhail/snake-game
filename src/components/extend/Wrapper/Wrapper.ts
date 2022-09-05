import styled from 'styled-components';
import { wrapper, wrapper_desktop } from '../../../styles/variables';
import { up } from 'styled-breakpoints';

/**
 * Wrapper
 *
 * @description Use for wrapping elements inside
 *
 * @returns {JSX.Element}
 */

export const Wrapper = styled.div`
  width: inherit;
  height: inherit;
  padding: ${wrapper};

  ${up('xl')} {
    padding: ${wrapper_desktop};
  }
`;
