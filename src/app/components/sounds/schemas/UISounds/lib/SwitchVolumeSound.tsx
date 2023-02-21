import useSound from 'use-sound';
import { useUpdateEffect } from 'usehooks-ts';
import { useSoundsContext } from '@context/SoundsContext';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { soundStatusSelector } from '@store/slices/sound.slice';
import getSoundSourceById from '@/helpers/getters/getSoundSourceById';

export const SwitchVolumeSound = () => {
    const context = useSoundsContext();
    const sourceSound = getSoundSourceById(context, 'toggleSound');
    const soundEnabled = useAppSelector(soundStatusSelector);

    const [playSwitchSound] = useSound(sourceSound.src, {
        ...sourceSound.options,
    });

    useUpdateEffect(() => {
        playSwitchSound(); // play on soundEnabled change
    }, [soundEnabled]);

    return <></>;
};
