import useSound from 'use-sound';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { useUpdateEffect } from 'usehooks-ts';
import { useSoundsContext } from '@context/SoundsContext';
import { soundStatusSelector } from '@store/slices/sound.slice';
import { gameLevelSelector } from '@store/slices/game.slice';
import getSoundSourceById from '@/helpers/getters/getSoundSourceById';

export const LevelUpSound = () => {
    const gameLevel = useAppSelector(gameLevelSelector);

    const context = useSoundsContext();
    const sourceSound = getSoundSourceById(context, 'levelUp');
    const soundEnabled = useAppSelector(soundStatusSelector);

    const [playLevelUpSound] = useSound(sourceSound.src, {
        ...sourceSound.options,
        soundEnabled,
    });

    useUpdateEffect(() => {
        if (gameLevel && gameLevel > 1) {
            playLevelUpSound(); // play on gameLevel change
        }
    }, [gameLevel]);

    return <></>;
};
