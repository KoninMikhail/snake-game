import { GameContainer } from '@templates/sections/Game/style/StyledGameTemplate';
import { DesktopScreen } from '@templates/devices/screen/DesktopScreen';
import { GameWideTemplate } from '@templates/sections/Game/variants/GameWideTemplate';
import { TabletScreen } from '@templates/devices/screen/TabletScreen';
import { GameCenteredTemplate } from '@templates/sections/Game/variants/GameCenteredTemplate';
import { MobileScreen } from '@templates/devices/screen/MobileScreen';
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
            <DesktopScreen>
                <GameWideTemplate {...game} />
            </DesktopScreen>

            <TabletScreen>
                <GameWideTemplate {...game} />
            </TabletScreen>

            <MobileScreen>
                <GameCenteredTemplate {...game} />
            </MobileScreen>
        </GameContainer>
    );
};
