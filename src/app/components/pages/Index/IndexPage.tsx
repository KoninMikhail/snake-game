import { useTranslation } from 'react-i18next';
import { IndexPageTemplate } from '@templates/pages/Index/IndexPageTemplate';
import { IndexPageSounds } from '@sounds/pages/IndexPageSounds';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { appDeviceTouchStateSelector } from '@store/slices/app.slice';

/**
 * @name IndexPage
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Note: This page, not have user data.
 */
export const IndexPage = () => {
    const { t } = useTranslation();
    const isTouchDevice = useAppSelector(appDeviceTouchStateSelector);

    /** Background
     * ======================== */
    const backgroundImage = {
        sourceID: 'background', // image id in ./context/imagesContext
        alt: `${t('app.name').toLowerCase()} - background.`,
    };

    /** LaunchSection
     * ======================== */
    const logoImage = {
        sourceID: 'logo', // image id in ./context/imagesContext
        alt: `${t('app.name').toLowerCase()} - ${t('app.slogan').toLowerCase()}`,
    };

    const CTAMessage = isTouchDevice
        ? t('home.startMessage.dbtap')
        : t('home.startMessage.keyboard');

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
            <IndexPageTemplate
                invalidOrientationMessage={{ message: modalInvalidOrientationMessage }}
                background={backgroundImage}
                launchBox={{
                    image: logoImage,
                    message: CTAMessage,
                }}
                footer={{
                    copyright: copyrightData,
                    github: githubLinkData,
                }}
            />
            <IndexPageSounds />
        </>
    );
};
