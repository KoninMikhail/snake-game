import { StyledSoundControl, StyledSoundOffIcon, StyledSoundOnIcon } from './StyledSoundControl';

interface ISoundControlProps {
  status: boolean;
}

export const SoundControl = ({ status }: ISoundControlProps): JSX.Element => {
  return (
    <>
      <StyledSoundControl>
        {status ? <StyledSoundOnIcon /> : <StyledSoundOffIcon />}
      </StyledSoundControl>
    </>
  );
};
