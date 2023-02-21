import useSound from 'use-sound';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { useSoundsContext } from '@context/SoundsContext';
import { soundStatusSelector } from '@store/slices/sound.slice';
import { gameLevelSelector, gameSnakePointsSelector } from '@store/slices/game.slice';
import getSoundSourceById from '@/helpers/getters/getSoundSourceById';
import { useEffect } from 'react';

export const IncreaseSnakeLengthSound = () => {
    const gameLevel = useAppSelector(gameLevelSelector);
    const snakePoints = useAppSelector(gameSnakePointsSelector);

    const context = useSoundsContext();
    const sourceSound = getSoundSourceById(context, 'eat');
    const soundEnabled = useAppSelector(soundStatusSelector);

    const [playIncreaseSnakeLengthSound] = useSound(sourceSound.src, {
        ...sourceSound.options,
        soundEnabled,
    });

    useEffect(() => {
        if (gameLevel && gameLevel >= 1 && snakePoints.length > 3) {
            playIncreaseSnakeLengthSound();
        }
    }, [gameLevel, playIncreaseSnakeLengthSound, snakePoints.length]);

    return <></>;
};
