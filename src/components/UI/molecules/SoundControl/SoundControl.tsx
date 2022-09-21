import { StyledSoundControl, StyledSoundOffIcon, StyledSoundOnIcon } from './StyledSoundControl';

/**
 * @typedef ISoundControlProps
 * @property {boolean} state - Sound service states
 * @property {onClickHandler} label - {() => void} onClickHandler - Function to call when the sound control is clicked
 */
interface ISoundControlProps {
  state: boolean;
  onClickHandler?: () => void;
}

/**
 * Sound Control
 *
 * @description Use for place sound controls
 *
 * @param {ISoundControlProps} props - Sound service states
 * @return {JSX.Element}
 * @constructor
 */
export const SoundControl = ({ state, onClickHandler }: ISoundControlProps): JSX.Element => {
  return (
    <>
      <StyledSoundControl onClick={onClickHandler}>
        {state ? <StyledSoundOnIcon /> : <StyledSoundOffIcon />}
      </StyledSoundControl>
    </>
  );
};
