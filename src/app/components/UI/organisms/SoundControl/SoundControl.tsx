import {soundActions, soundStatusSelector} from '@store/slices/sound.slice';
import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import {SoundOnIcon} from '@ui/atoms/assets/icons/SoundOnIcon/SoundOnIcon';
import {IconToggle} from '@ui/molecules/inputs/toggles/IconToggle/IconToggle';
import {ISoundControl} from '@ui/organisms/SoundControl/ISoundControl.interface';
import {SoundOffIcon} from '@ui/atoms/assets/icons/SoundOffIcon/SoundOffIcon';

/**
 * @name SoundControl
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for toggle showSound volume
 *
 * @param size - icon size
 */
export const SoundControl = ({ size }: ISoundControl) => {
    const state = useAppSelector(soundStatusSelector);
    const actions = useActionCreators(soundActions);

    const onClick = () => {
        actions.setSound({ isEnabled: !state });
    };

    return (
        <IconToggle
            state={state}
            size={size}
            iconWhenTrue={<SoundOnIcon />}
            iconWhenFalse={<SoundOffIcon />}
            onClick={onClick}
        />
    );
};
