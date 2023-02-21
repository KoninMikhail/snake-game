import { MainContainer } from '@templates/containers/MainContainer';
import { FooterTemplate } from '@templates/footers/Footer/FooterTemplate';
import { OrientationLandscape } from '@templates/devices/orientations/Landscape/OrientationLandscape';
import { InvalidOrientationModal } from '@ui/molecules/modals/InvalidOrientationNotice/InvalidOrientationModal';
import { MobileScreen } from '@templates/devices/screen/MobileScreen';
import { IGamePageTemplate } from '@templates/pages/Game/GamePageTemplate.interface';
import { ToolbarWithSoundControlAndLevel } from '@templates/toolbars/ToolbarWithSoundControlAndLevel/ToolbarWithSoundControlAndLevel';
import { GameTemplate } from '@templates/sections/Game/GameTemplate';
import { useBeforeUnload } from 'react-router-dom';
import { useCallback } from 'react';
import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import { gameActions } from '@store/slices/game.slice';

export const GamePageTemplate = <T extends number, K extends number>({
    toolbar,
    game,
    footer,
    invalidOrientationModalMessage,
}: IGamePageTemplate<T, K>) => {
    const gameActionsList = useActionCreators(gameActions);

    useBeforeUnload(
        useCallback(() => {
            gameActionsList.hardResetGame();
        }, [gameActionsList])
    );

    return (
        <>
            <MobileScreen>
                <OrientationLandscape>
                    <InvalidOrientationModal {...invalidOrientationModalMessage} />
                </OrientationLandscape>
            </MobileScreen>

            <MainContainer>
                <ToolbarWithSoundControlAndLevel {...toolbar} />
                <GameTemplate {...game} />
                <FooterTemplate {...footer} />
            </MainContainer>
        </>
    );
};
