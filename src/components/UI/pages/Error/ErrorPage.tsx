import { ErrorTemplate } from '../../templates/Error/ErrorTemplate';
import { ERR_TEXT } from '../../../../constants/APP';

export const ErrorPage = () => <ErrorTemplate message={ERR_TEXT} />;
