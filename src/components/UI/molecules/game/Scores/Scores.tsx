import { StyledScores, StyledScoreText } from './StyledScores';
import { StyledGrid } from 'components/UI/extend/Grid/StyledGrid';
import { GridItem } from 'components/UI/extend/GridItem/GridItem';
import { Text } from 'components/UI/atoms/body/Text/Text';
import { TextAlign } from 'components/UI/atoms/body/TextAlign/TextAlign';
import padCharactersLeft from 'utils/padCharactersLeft';

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
 * Use for display Game scores;
 *
 * @param {IScoresProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const Scores = ({ align, score, maxScore }: IScoresProps): JSX.Element => {
  const isFormattedScore = padCharactersLeft(score, 6);

  return (
    <>
      <StyledScores>
        <StyledGrid gap="0">
          <GridItem>
            <TextAlign align={align}>
              <StyledScoreText as="span">{isFormattedScore}</StyledScoreText>
            </TextAlign>
          </GridItem>
          <GridItem>
            <TextAlign align={align}>
              <Text as="span">{'max-score: ' + maxScore}</Text>
            </TextAlign>
          </GridItem>
        </StyledGrid>
      </StyledScores>
    </>
  );
};
