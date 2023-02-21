import useSound from 'use-sound';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { useUpdateEffect } from 'usehooks-ts';
import { useSoundsContext } from '@context/SoundsContext';
import { soundStatusSelector } from '@store/slices/sound.slice';
import { gameStatusSelector } from '@store/slices/game.slice';
import getSoundSourceById from '@/helpers/getters/getSoundSourceById';

export const GameStartSound = () => {
    const gameStatus = useAppSelector(gameStatusSelector);

    const context = useSoundsContext();
    const sourceSound = getSoundSourceById(context, 'gameStart');
    const soundEnabled = useAppSelector(soundStatusSelector);

    const [playGameStartSound] = useSound(sourceSound.src, {
        ...sourceSound.options,
        soundEnabled,
    });

    useUpdateEffect(() => {
        gameStatus === 'GAME' && playGameStartSound();
    }, [gameStatus]);

    return <></>;
};
