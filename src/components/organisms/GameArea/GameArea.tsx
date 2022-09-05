import { Grid } from '../../extend/Grid/Grid';
import { GridItem } from '../../extend/GridItem/GridItem';
import useDeviceTypeScreenCheck from '../../../hooks/use-device-screen-breakpoints';
import { Scores } from '../../molecules/Scores/Scores';
import { InfoBox } from '../../molecules/InfoBox/InfoBox';
import { GameContainer } from '../../molecules/GameContainer/GameContainer';
import ArrowsImage from 'assets/images/graphics/arrows.svg';

interface IGameProps {
  score: number;
  maxScore: number;
}

export const GameArea = ({ score, maxScore }: IGameProps): JSX.Element => {
  const { isDesktop } = useDeviceTypeScreenCheck();

  return (
    <>
      <Grid
        columns={isDesktop ? '20vw auto 25vw' : '1fr'}
        gap={'1.5rem'}
        align="center"
        justify={'stretch'}
      >
        <GridItem>
          <Scores align={isDesktop ? 'left' : 'center'} score={score} maxScore={maxScore} />
        </GridItem>
        <GridItem align="center" justify="center">
          <GameContainer />
        </GridItem>
        <GridItem>
          <InfoBox
            image={ArrowsImage}
            content={'use keyboard Arrows' + '\n' + 'for game control'}
          />
        </GridItem>
      </Grid>
    </>
  );
};
