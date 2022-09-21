import { Wrapper } from '../../extend/Wrapper/Wrapper';
import { Footer, IFooterProps } from 'components/UI/organisms/Footer/Footer';
import { GridItem } from '../../extend/GridItem/GridItem';
import { GameArea } from '../../organisms/GameArea/GameArea';
import { BackgroundImage } from 'components/UI/atoms/images/BackgroundImage';
import GameBG from 'assets/images/backgrounds/gamescreen.jpg';
import { StyledGameTemplate, StyledGameTemplateGrid } from './StyledGameTemplate';
import { Toolbar, IToolbarProps } from 'components/UI/organisms/Toolbar/Toolbar';

interface IGameTemplateProps {
  toolbar: IToolbarProps;
  game: {
    score: number;
    maxScore: number;
  };
  footer: IFooterProps;
}

export const GameTemplate = ({ toolbar, game, footer }: IGameTemplateProps): JSX.Element => {
  return (
    <>
      <StyledGameTemplate>
        <BackgroundImage src={GameBG}>
          <Wrapper>
            <StyledGameTemplateGrid rows="max-content auto max-content">
              <GridItem justify="end">
                <Toolbar {...toolbar} />
              </GridItem>
              <GridItem align="center">
                <GameArea {...game} />
              </GridItem>
              <GridItem justify="stretch">
                <Footer {...footer} />
              </GridItem>
            </StyledGameTemplateGrid>
          </Wrapper>
        </BackgroundImage>
      </StyledGameTemplate>
    </>
  );
};
