import { StyledHomeTemplate, StyledHomeTemplateGrid } from './StyledHomeTemplate';
import { Wrapper } from 'components/extend/Wrapper/Wrapper';
import { BackgroundImage } from 'components/atoms/images/BackgroundImage';
import { GridItem } from 'components/extend/GridItem/GridItem';
import { IWelcomeBoxProps, WelcomeBox } from 'components/organisms/WelcomeBox/WelcomeBox';
import { Footer, IFooterProps } from 'components/organisms/Footer/Footer';
import { Toolbar, IToolbarProps } from 'components/organisms/Toolbar/Toolbar';
import HomeBGAnimation from 'assets/images/backgrounds/bg_animation.gif';

interface IHomeTemplateProps {
  toolbar: IToolbarProps;
  welcome: IWelcomeBoxProps;
  footer: IFooterProps;
}

/**
 * HomeTemplate
 *
 * Use for Home page as template
 *
 * @param {IToolbarProps} toolbar - Toolbar properties
 * @param {IWelcomeBoxProps} welcome - Welcome box properties
 * @param {IFooterProps} footer - Footer static data
 * @return {JSX.Element}
 * @constructor
 */
export const HomeTemplate = ({ toolbar, welcome, footer }: IHomeTemplateProps): JSX.Element => {
  return (
    <>
      <StyledHomeTemplate>
        <BackgroundImage src={HomeBGAnimation}>
          <Wrapper>
            <StyledHomeTemplateGrid rows="max-content auto max-content">
              <GridItem justify="end">
                <Toolbar {...toolbar} />
              </GridItem>
              <GridItem justify="center" align="center">
                <WelcomeBox {...welcome} />
              </GridItem>
              <GridItem justify="stretch">
                <Footer {...footer} />
              </GridItem>
            </StyledHomeTemplateGrid>
          </Wrapper>
        </BackgroundImage>
      </StyledHomeTemplate>
    </>
  );
};
