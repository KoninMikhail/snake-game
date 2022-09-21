import useDeviceTypeScreenCheck from '../../../../hooks/use-device-screen-breakpoints';
import { Grid } from '../../extend/Grid/Grid';
import { GridItem } from '../../extend/GridItem/GridItem';
import { LogoImage } from 'components/UI/molecules/LogoImage/LogoImage';
import { StartMessage } from '../../molecules/StartMessage/StartMessage';
import { StyledWelcomeBox } from './StyledWelcomeBox';

export interface IWelcomeBoxProps {
  message: string;
}

export const WelcomeBox = ({ message }: IWelcomeBoxProps): JSX.Element => {
  const { isDesktop } = useDeviceTypeScreenCheck();

  return (
    <>
      <StyledWelcomeBox>
        <Grid gap={'2rem'}>
          <GridItem justify="center">
            <LogoImage width={isDesktop ? '42vw' : '100%'} />
          </GridItem>
          <GridItem justify="center">
            <StartMessage align="center" content={message} />
          </GridItem>
        </Grid>
      </StyledWelcomeBox>
    </>
  );
};
