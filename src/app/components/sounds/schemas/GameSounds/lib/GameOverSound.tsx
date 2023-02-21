import useSound from 'use-sound';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { useUpdateEffect } from 'usehooks-ts';
import { useSoundsContext } from '@context/SoundsContext';
import { soundStatusSelector } from '@store/slices/sound.slice';
import { gameStatusSelector } from '@store/slices/game.slice';
import getSoundSourceById from '@/helpers/getters/getSoundSourceById';

export const GameOverSound = () => {
    const gameStatus = useAppSelector(gameStatusSelector);

    const context = useSoundsContext();
    const sourceSound = getSoundSourceById(context, 'gameOver');
    const soundEnabled = useAppSelector(soundStatusSelector);

    const [playGameOverSound] = useSound(sourceSound.src, { ...sourceSound.options, soundEnabled });

    useUpdateEffect(() => {
        if (gameStatus === 'OVER') {
            playGameOverSound();
        }
    }, [gameStatus]);

    return <></>;
};
