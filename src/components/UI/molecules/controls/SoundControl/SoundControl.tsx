import {
  StyledSoundOffIcon,
  StyledSoundOnIcon,
  StyledTransparentButton,
} from './StyledSoundControl';
import { toggleSound } from 'store/slices/dataSlice';
import useAppDispatch from 'hooks/useAppDispatch';

interface ISoundControlProps {
  status: boolean;
}

/**
 * Sound Control
 *
 * Use for place sound controls
 *
 * @return {JSX.Element}
 * @constructor
 */
export const SoundControl = ({ status }: ISoundControlProps) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <StyledTransparentButton onClick={() => dispatch(toggleSound())}>
        {status ? <StyledSoundOnIcon /> : <StyledSoundOffIcon />}
      </StyledTransparentButton>
    </>
  );
};
