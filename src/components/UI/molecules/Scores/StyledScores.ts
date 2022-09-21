import styled from 'styled-components';
import { Text } from 'components/UI/atoms/body/Text/Text';
import { up } from 'styled-breakpoints';

export const StyledScores = styled.div`
  display: block;
`;

export const StyledScoreText = styled(Text)`
  font-size: 2.4em;

  ${up('xl')} {
    font-size: 3em;
  }
`;
