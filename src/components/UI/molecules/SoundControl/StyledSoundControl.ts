import styled from 'styled-components';
import { ReactComponent as SoundOffIcon } from 'assets/icons/sound_off.svg';
import { ReactComponent as SoundOnIcon } from 'assets/icons/sound_on.svg';
import { up } from 'styled-breakpoints';

export const StyledSoundControl = styled.div`
  cursor: pointer;
  display: grid;
  align-items: center;
  height: 4rem;
`;

export const StyledSoundOffIcon = styled(SoundOffIcon)`
  fill: white;
  width: 2.5em;
  height: 2.5em;

  ${up('sm')} {
    width: 3.5em;
    height: 3.5em;
  }
`;

export const StyledSoundOnIcon = styled(SoundOnIcon)`
  fill: white;
  width: 2.5em;
  height: 2.5em;

  ${up('md')} {
    width: 3.5em;
    height: 3.5em;
  }
`;
