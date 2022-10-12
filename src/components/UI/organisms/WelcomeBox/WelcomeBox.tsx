import { StyledGrid } from '../../extend/Grid/StyledGrid';
import { GridItem } from '../../extend/GridItem/GridItem';
import { LogoImage } from 'components/UI/molecules/images/LogoImage/LogoImage';
import { StartNotice } from '../../molecules/notices/StartNotice/StartNotice';
import { StyledWelcomeBox } from './StyledWelcomeBox';

interface IWelcomeBoxProps {
  message: string;
  size: string;
}

/**
 * WelcomeBox
 *
 * Use for showing the activity box on home screen
 * @param {string} message
 * @param size
 * @return {JSX.Element}
 * @constructor
 */
export const WelcomeBox = ({ message, size }: IWelcomeBoxProps) => {
  return (
    <StyledWelcomeBox>
      <StyledGrid gap={'2rem'}>
        <GridItem justify="center">
          <LogoImage width={size} />
        </GridItem>
        <GridItem justify="center">
          <StartNotice align="center" content={message} />
        </GridItem>
      </StyledGrid>
    </StyledWelcomeBox>
  );
};
