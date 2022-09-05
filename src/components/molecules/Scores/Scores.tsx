import { StyledScores, StyledScoreText } from './StyledScores';
import { Grid } from 'components/extend/Grid/Grid';
import { GridItem } from 'components/extend/GridItem/GridItem';
import { Text } from 'components/atoms/body/Text/Text';
import { TextAlign } from 'components/atoms/body/TextAlign/TextAlign';
import padLeft from '../../../utils/padLeft';

/**
 * @typedef IScoresProps
 *
 * @property {("left" | "right" | "center")} align - Scores text alignment
 * @property  {number} score
 * @property  {number} maxScore
 */
interface IScoresProps {
  align: 'left' | 'right' | 'center';
  score: number;
  maxScore: number;
}

/**
 * Scores
 *
 * @description Use for display Game scores;
 *
 * @param {IScoresProps} props
 * @return {JSX.Element}
 * @constructor
 */

export const Scores = ({ align, score, maxScore }: IScoresProps): JSX.Element => {
  const formattedScore = padLeft(score, 6);

  return (
    <>
      <StyledScores>
        <Grid gap="0">
          <GridItem>
            <TextAlign align={align}>
              <StyledScoreText as="span">{formattedScore}</StyledScoreText>
            </TextAlign>
          </GridItem>
          <GridItem>
            <TextAlign align={align}>
              <Text as="span">{'max-score: ' + maxScore}</Text>
            </TextAlign>
          </GridItem>
        </Grid>
      </StyledScores>
    </>
  );
};
