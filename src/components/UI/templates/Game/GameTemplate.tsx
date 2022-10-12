import { Wrapper } from '../../extend/Wrapper/Wrapper';
import { Footer } from 'components/UI/organisms/Footer/Footer';
import { GridItem } from '../../extend/GridItem/GridItem';
import { PlayArea } from '../../organisms/PlayArea/PlayArea';
import { StyledGameTemplate, StyledGameTemplateGrid } from './StyledGameTemplate';
import { Toolbar } from 'components/UI/organisms/Toolbar/Toolbar';
import useDeviceScreenSize from '../../../../hooks/useDeviceScreenSize';
import { IGitHubLinkProps } from '../../molecules/links/GithubLink/GitHubLink';
import { ICopyrightProps } from '../../molecules/texts/Copyright/Copyright';
import { DataStateType } from '../../../../store/slices/dataSlice';
import { GameState } from '../../../../store/slices/gameSlice';

interface IGameTemplateProps {
  generalData: DataStateType;
  gameData: GameState;
  github: IGitHubLinkProps;
  copyright: ICopyrightProps;
}

/**
 * GameTemplate
 *
 * Use for canvasBoard page
 *
 * @param {IGameTemplateProps} props
 * @return {JSX.Element}
 * @constructor
 */
export const GameTemplate = ({ generalData, gameData, copyright, github }: IGameTemplateProps) => {
  const { isDesktop } = useDeviceScreenSize();

  const { sound, maxScore } = generalData;
  const { score } = gameData;

  return (
    <StyledGameTemplate>
      <Wrapper>
        <StyledGameTemplateGrid rows="max-content 1fr max-content">
          <GridItem justify="stretch">
            <Toolbar exit={true} sound={sound} />
          </GridItem>
          <GridItem align="center">
            <PlayArea scores={{ score, maxScore }} template={isDesktop ? 'wide' : 'compact'} />
          </GridItem>
          <GridItem justify="stretch">
            <Footer content={{ copyright, github }} template={isDesktop ? 'wide' : 'compact'} />
          </GridItem>
        </StyledGameTemplateGrid>
      </Wrapper>
    </StyledGameTemplate>
  );
};
