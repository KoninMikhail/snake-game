import { GamePage } from '@pages/Game/GamePage';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { Navigate } from 'react-router-dom';
import { gameLaunchSelector } from '@store/slices/game.slice';

export default function Game() {
    const isLaunched = useAppSelector(gameLaunchSelector);
    return isLaunched === 'launch' ? <GamePage /> : <Navigate to={'/'} />;
}
