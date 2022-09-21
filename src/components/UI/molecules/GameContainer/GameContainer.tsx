import { NeutralBorder } from '../../../../assets/borders/NeutraBorderl';
import { StyledGameContainer } from './StyledGameContainer';
import useDeviceTypeScreenCheck from '../../../../hooks/use-device-screen-breakpoints';

export const GameContainer = (): JSX.Element => {
  const { isDesktop } = useDeviceTypeScreenCheck();

  return (
    <>
      <StyledGameContainer size={isDesktop ? '60vh' : '40vh'}>
        <NeutralBorder>{'game area'}</NeutralBorder>
      </StyledGameContainer>
    </>
  );
};
