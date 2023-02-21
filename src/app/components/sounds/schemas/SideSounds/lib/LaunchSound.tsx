import useSound from 'use-sound';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { useSoundsContext } from '@context/SoundsContext';
import { soundStatusSelector } from '@store/slices/sound.slice';
import getSoundSourceById from '@/helpers/getters/getSoundSourceById';
import { useEffect } from 'react';
import { gameLaunchSelector } from '@store/slices/game.slice';

export const LaunchSound = () => {
    const gameLaunchStatus = useAppSelector(gameLaunchSelector);

    // Sound
    const context = useSoundsContext();
    const sourceSound = getSoundSourceById(context, 'start');
    const soundEnabled = useAppSelector(soundStatusSelector);

    const [playStartSound] = useSound(sourceSound.src, { ...sourceSound.options, soundEnabled });

    useEffect(() => {
        gameLaunchStatus === 'launch' && playStartSound();
    }, [gameLaunchStatus, playStartSound]);

    return <></>;
};
