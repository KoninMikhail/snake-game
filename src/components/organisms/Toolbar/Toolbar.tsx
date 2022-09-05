import { StyledToolbar } from './StyledToolbar';
import { SoundControl } from '../../molecules/SoundControl/SoundControl';

export interface IToolbarProps {
  sound: boolean;
}

export const Toolbar = ({ sound }: IToolbarProps): JSX.Element => {
  return (
    <>
      <StyledToolbar>
        <SoundControl status={sound} />
      </StyledToolbar>
    </>
  );
};
