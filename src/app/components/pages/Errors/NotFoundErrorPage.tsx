import { useTranslation } from 'react-i18next';
import { NotFoundPageTemplate } from '@templates/pages/NotFound/NotFoundPageTemplate';

export const NotFoundPage = () => {
    const { t } = useTranslation();

    /** Headline
     * ======================== */
    const headline = t('app.notFound.text');

    /** Button
     * ======================== */
    const buttonLabel = t('app.notFound.buttonLabel');

    /** Background
     * ======================== */
    const backgroundImage = {
        sourceID: 'notFoundBackground', // image id in ./context/imagesContext
        alt: `${t('app.name').toLowerCase()} - background.`,
    };

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
            <NotFoundPageTemplate
                headline={headline}
                background={backgroundImage}
                footer={{
                    copyright: copyrightData,
                    github: githubLinkData,
                }}
                buttonLabel={buttonLabel}
            />
        </>
    );
};
