import { MainContainer } from '@templates/containers/MainContainer';
import { FooterTemplate } from '@templates/footers/Footer/FooterTemplate';
import { OrientationLandscape } from '@templates/devices/orientations/Landscape/OrientationLandscape';
import { InvalidOrientationModal } from '@ui/molecules/modals/InvalidOrientationNotice/InvalidOrientationModal';
import { SmallScreen } from '@templates/devices/screen/size/SmallScreen';
import { IGamePageTemplate } from '@templates/pages/Game/GamePageTemplate.interface';
import { ToolbarWithSoundControlAndLevel } from '@templates/toolbars/ToolbarWithSoundControlAndLevel/ToolbarWithSoundControlAndLevel';
import { GameTemplate } from '@templates/sections/Game/GameTemplate';
import { useBeforeUnload } from 'react-router-dom';
import { useCallback } from 'react';
import useActionCreators from '@hooks/useActionCreators/useActionCreators';
import { gameActions } from '@store/slices/game.slice';

export const GamePageTemplate = <T extends number>({
    toolbar,
    game,
    footer,
    invalidOrientationModalMessage,
}: IGamePageTemplate<T>) => {
    const gameActionsList = useActionCreators(gameActions);

    useBeforeUnload(
        useCallback(() => {
            gameActionsList.hardResetGame();
        }, [gameActionsList])
    );

    return (
        <>
            <SmallScreen>
                <OrientationLandscape>
                    <InvalidOrientationModal {...invalidOrientationModalMessage} />
                </OrientationLandscape>
            </SmallScreen>

            <MainContainer>
                <ToolbarWithSoundControlAndLevel {...toolbar} />
                <GameTemplate {...game} />
                <FooterTemplate {...footer} />
            </MainContainer>
        </>
    );
};
