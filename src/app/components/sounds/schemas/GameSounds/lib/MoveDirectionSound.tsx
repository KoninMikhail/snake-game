import useSound from 'use-sound';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { useUpdateEffect } from 'usehooks-ts';
import { useSoundsContext } from '@context/SoundsContext';
import { soundStatusSelector } from '@store/slices/sound.slice';
import { gameMoveDirectionSelector, gameStatusSelector } from '@store/slices/game.slice';
import isEven from '@/helpers/validators/isEven';
import getRandomInt from '@/helpers/getters/getRandomInt';
import getSoundSourceById from '@/helpers/getters/getSoundSourceById';
import isGameOn from '@/helpers/validators/isGameOn';

export const MoveDirectionSound = () => {
    const gameStatus = useAppSelector(gameStatusSelector);
    const gameMoveDirection = useAppSelector(gameMoveDirectionSelector);

    const context = useSoundsContext();
    const sourceControlsLSound = getSoundSourceById(context, 'controlsL');
    const sourceControlsHSound = getSoundSourceById(context, 'controlsH');
    const soundEnabled = useAppSelector(soundStatusSelector);

    const [playControlsLSound] = useSound(sourceControlsLSound.src, {
        ...sourceControlsLSound.options,
        soundEnabled,
    });
    const [playControlsHSound] = useSound(sourceControlsHSound.src, {
        ...sourceControlsHSound.options,
        soundEnabled,
    });

    useUpdateEffect(() => {
        if (isGameOn(gameStatus)) {
            if (isEven(getRandomInt(0, 1000))) {
                playControlsLSound();
            } else {
                playControlsHSound();
            }
        }
    }, [gameMoveDirection]);

    return <></>;
};
