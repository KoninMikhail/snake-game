import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../../../../static/icons/close.svg';

export const StyledCloseIcon = styled(CloseIcon)`
  fill: white;
  width: 2.5em;
  height: 2.5em;

  &:hover {
    transform: scale(0.85);
  }
`;
