import styled from 'styled-components';
import { Text } from 'components/UI/atoms/body/Text/Text';
import { up } from 'styled-breakpoints';

export const StyledStartMessageText = styled(Text)`
  font-size: 1em;

  ${up('sm')} {
    font-size: 1.3em;
  }
`;
