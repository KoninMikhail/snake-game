import { GameOverSound } from '@sounds/schemas/GameSounds/lib/GameOverSound';
import { GameStartSound } from '@sounds/schemas/GameSounds/lib/GameStartSound';
import { IncreaseSnakeLengthSound } from '@sounds/schemas/GameSounds/lib/IncreaseSnakeLenghtSound';
import { MoveDirectionSound } from '@sounds/schemas/GameSounds/lib/MoveDirectionSound';
import { LevelUpSound } from '@sounds/schemas/GameSounds/lib/LevelUpSound';

export const GameSounds = () => {
    return (
        <>
            <GameOverSound />
            <GameStartSound />
            <IncreaseSnakeLengthSound />
            <MoveDirectionSound />
            <LevelUpSound />
        </>
    );
};
