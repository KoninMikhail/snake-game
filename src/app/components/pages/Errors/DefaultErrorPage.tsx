import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ErrorPageTemplate } from '@templates/pages/Error/ErrorPageTemplate';
import { useTranslation } from 'react-i18next';

export const DefaultErrorPage = () => {
    const error = useRouteError();
    const { t } = useTranslation();

    if (isRouteErrorResponse(error)) {
        return <ErrorPageTemplate status={error.status} message={error.data?.message} />;
    }

    return <ErrorPageTemplate message={t('app.error.text')} />;
};
