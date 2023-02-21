import { useDetectGameOver } from '@/app/services/engine/parts/useDetectGameOver';
import { useSpeedControl } from '@/app/services/engine/parts/useSpeedControl';
import { useSnakeMovement } from '@/app/services/engine/parts/useSnakeMovement';
import { useScore } from '@/app/services/engine/parts/useScore';
import { useLevel } from '@/app/services/engine/parts/useLevel';
import { useDetectEatFuit } from '@/app/services/engine/parts/useDetectEatFuit';

export default function useGameEngine(): void {
    useDetectGameOver();
    useSpeedControl();
    useSnakeMovement();
    useScore();
    useLevel();
    useDetectEatFuit();
}
