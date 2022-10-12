import { GridItem } from '../../extend/GridItem/GridItem';
import { Scores } from '../../molecules/game/Scores/Scores';
import { ControllsInfo } from '../../molecules/InfoBox/ControllsInfo';
import ArrowsImage from 'static/images/graphics/arrows.svg';
import { Grid } from '../../extend/Grid/Grid';

interface IPlayAreaScores {
  score: number;
  maxScore: number;
}

interface IPlayAreaProps {
  scores: IPlayAreaScores;
  template: 'compact' | 'wide';
}

/**
 * PlayArea
 * @param {IScores} scores
 * @param {ICanvasBoardProps} game
 * @param {"compact" | "wide"} template
 * @return {JSX.Element}
 * @constructor
 */
export const PlayArea = ({ scores, template }: IPlayAreaProps) => {
  const isWideTemplate = template === 'wide';

  return (
    <Grid
      columns={isWideTemplate ? '25vw auto 25vw' : '1fr'}
      gap={'1.5rem'}
      align="center"
      justify={'stretch'}
    >
      <GridItem justify={isWideTemplate ? 'start' : 'center'} align={'center'}>
        <Scores
          align={isWideTemplate ? 'left' : 'center'}
          score={scores.score}
          maxScore={scores.maxScore}
        />
      </GridItem>
      <GridItem align="center" justify="center" style={{ width: '100%' }}>
        {'canvasBoard here'}
      </GridItem>
      <GridItem justify={isWideTemplate ? 'end' : 'center'} align={'center'}>
        <ControllsInfo
          image={ArrowsImage}
          content={'use keyboard Arrows' + '\n' + 'for canvasBoard control'}
        />
      </GridItem>
    </Grid>
  );
};
