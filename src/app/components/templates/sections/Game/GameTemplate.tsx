import { GameContainer } from '@templates/sections/Game/style/StyledGameTemplate';
import { LargeScreen } from '@templates/devices/screen/size/LargeScreen';
import { GameWideTemplate } from '@templates/sections/Game/variants/GameWideTemplate';
import { MiddleScreen } from '@templates/devices/screen/size/MiddleScreen';
import { GameCenteredTemplate } from '@templates/sections/Game/variants/GameCenteredTemplate';
import { SmallScreen } from '@templates/devices/screen/size/SmallScreen';
import { IGameTemplate } from '@templates/sections/Game/GameTemplate.interface';
import { AssertPositive } from '@/types/assert-positive';
import { useEffectOnce } from 'usehooks-ts';
import { setupGameListeners } from '@store/middlewares/setupListeners';
import { startAppListening } from '@store/store';

export const GameTemplate = <T extends AssertPositive<number>>(game: IGameTemplate<T>) => {
    /** Middlewares
     * ======================== */
    useEffectOnce(() => {
        setupGameListeners(startAppListening);
        return () => setupGameListeners(startAppListening)();
    });

    return (
        <GameContainer>
            <LargeScreen>
                <GameWideTemplate {...game} />
            </LargeScreen>

            <MiddleScreen>
                <GameWideTemplate {...game} />
            </MiddleScreen>

            <SmallScreen>
                <GameCenteredTemplate {...game} />
            </SmallScreen>
        </GameContainer>
    );
};
