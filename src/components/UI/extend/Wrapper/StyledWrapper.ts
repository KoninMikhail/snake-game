import styled from 'styled-components';
import { wrapper, wrapper_desktop } from '../../../../styles/variables';
import { up } from 'styled-breakpoints';

export const StyledWrapper = styled.div`
  width: inherit;
  height: inherit;
  padding: ${wrapper};

  ${up('xl')} {
    padding: ${wrapper_desktop};
  }
`;
