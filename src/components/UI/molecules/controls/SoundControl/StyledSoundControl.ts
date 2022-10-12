import styled from 'styled-components';
import { ReactComponent as SoundOffIcon } from 'static/icons/sound_off.svg';
import { ReactComponent as SoundOnIcon } from 'static/icons/sound_on.svg';
import { up } from 'styled-breakpoints';
import { TransparentButton } from '../../../atoms/buttons/Transparent/TransparentButton';

export const StyledSoundOffIcon = styled(SoundOffIcon)`
  fill: white;
  width: 3em;
  height: 3em;

  ${up('sm')} {
    width: 3.5em;
    height: 3.5em;
  }
`;

export const StyledSoundOnIcon = styled(SoundOnIcon)`
  fill: white;
  width: 3em;
  height: 3em;

  ${up('md')} {
    width: 3.5em;
    height: 3.5em;
  }
`;

export const StyledTransparentButton = styled(TransparentButton)`
  padding: 0;
`;
