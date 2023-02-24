import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { useTranslation } from 'react-i18next';
import { maxScoreSelector } from '@store/slices/maxScore.slice';
import { GamePageTemplate } from '@templates/pages/Game/GamePageTemplate';
import { GamePageSounds } from '@sounds/pages/GamePageSounds';
import { appDeviceTouchStateSelector } from '@store/slices/app.slice';

/**
 * @name GamePage
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * This page places user max scores.
 * If application is not initialized, redirect to home.
 */
export const GamePage = () => {
    const { t } = useTranslation();
    const isTouchDevice = useAppSelector(appDeviceTouchStateSelector);

    /** MaxScore
     * ======================== */
    const userMaxScore = useAppSelector(maxScoreSelector);
    const userMaxScoreLabel = t('game.maxScore');

    /** Level
     * ======================== */
    const levelUpText = t('game.level.upText');
    const levelDownText = t('game.level.downText');

    /** Game board
     * ======================== */
    const modalGameCountdownMessage = t('game.modal.countdown.caption');
    const modalGameOverHeadline = t('game.modal.gameOver.caption');
    const modalGameOverButtonLabel = t('game.modal.gameOver.button');
    const modalGamePauseHeadline = t('game.modal.gamePause.caption');
    const modalGamePauseMessage = isTouchDevice
        ? t('game.modal.gamePause.message')
        : t('game.modal.gamePause.message.desktop');

    /** Controls Message
     * ======================== */
    const infoMessageSwipeControl = t('game.messages.control.swipe');
    const infoMessageKeyboardControl = t('game.messages.control.keyboard');

    /** Invalid orientation modal message
     * ======================== */
    const modalInvalidOrientationMessage = t('modals.invalidOrientation.caption');

    /** Footer
     * ======================== */
    const copyrightData = {
        author: `${t('copyright.author')}`,
        creationYear: Number(`${t('copyright.buildYear')}`),
        license: `${t('copyright.license')}`,
    };
    const githubLinkData = {
        uri: `${t('github.button.link')}`,
        label: `${t('github.button.label')}`,
    };

    return (
        <>
            <GamePageTemplate
                toolbar={{
                    level: {
                        upText: levelUpText,
                        downText: levelDownText,
                    },
                }}
                game={{
                    locale: {
                        modals: {
                            countdownModal: { message: modalGameCountdownMessage },
                            gameOverModal: {
                                headline: modalGameOverHeadline,
                                buttonLabel: modalGameOverButtonLabel,
                            },
                            pauseModal: {
                                headline: modalGamePauseHeadline,
                                message: modalGamePauseMessage,
                            },
                        },
                        messages: {
                            swipeControl: infoMessageSwipeControl,
                            keyboardControl: infoMessageKeyboardControl,
                        },
                        maxScore: {
                            value: userMaxScore,
                            label: userMaxScoreLabel,
                        },
                    },
                }}
                invalidOrientationModalMessage={{ message: modalInvalidOrientationMessage }}
                footer={{
                    copyright: copyrightData,
                    github: githubLinkData,
                }}
            />
            <GamePageSounds />
        </>
    );
};
