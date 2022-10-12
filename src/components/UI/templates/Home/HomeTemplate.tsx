import { StyledHomeTemplate, StyledHomeTemplateGrid } from './StyledHomeTemplate';
import { Wrapper } from 'components/UI/extend/Wrapper/Wrapper';
import { BackgroundImage } from 'components/UI/atoms/images/BackgroundImage/BackgroundImage';
import { GridItem } from 'components/UI/extend/GridItem/GridItem';
import HomeBGAnimation from 'static/images/backgrounds/bg_animation.gif';
import HomeBGAnimationMobile from 'static/images/backgrounds/bg_animation_mobile.gif';
import { WelcomeBox } from 'components/UI/organisms/WelcomeBox/WelcomeBox';
import { Footer } from 'components/UI/organisms/Footer/Footer';
import { Toolbar } from 'components/UI/organisms/Toolbar/Toolbar';

import useDeviceScreenSize from 'hooks/useDeviceScreenSize';
import { IGitHubLinkProps } from '../../molecules/links/GithubLink/GitHubLink';
import { ICopyrightProps } from '../../molecules/texts/Copyright/Copyright';

interface IHomeTemplateProps {
  sound: boolean;
  message: string;
  github: IGitHubLinkProps;
  copyright: ICopyrightProps;
}

/**
 * HomeTemplate
 *
 * Use for Home page as template
 *
 * @return {JSX.Element}
 * @constructor
 */
export const HomeTemplate = ({ sound, message, copyright, github }: IHomeTemplateProps) => {
  const { isDesktop, isTablet } = useDeviceScreenSize();

  return (
    <>
      <StyledHomeTemplate>
        <BackgroundImage src={isTablet ? HomeBGAnimation : HomeBGAnimationMobile}>
          <Wrapper>
            <StyledHomeTemplateGrid rows="max-content auto max-content">
              <GridItem justify="stretch">
                <Toolbar exit={false} sound={sound} />
              </GridItem>
              <GridItem justify="center" align="center">
                <WelcomeBox size={isDesktop ? '42vw' : '100%'} message={message} />
              </GridItem>
              <GridItem justify="stretch">
                <Footer content={{ copyright, github }} template={isDesktop ? 'wide' : 'compact'} />
              </GridItem>
            </StyledHomeTemplateGrid>
          </Wrapper>
        </BackgroundImage>
      </StyledHomeTemplate>
    </>
  );
};
