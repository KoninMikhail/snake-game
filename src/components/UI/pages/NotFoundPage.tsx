import { ErrorTemplate } from '../templates/Error/ErrorTemplate';
import { NOT_FOUND_TEXT } from '../../../constants/APP';

export const NotFoundPage = (): JSX.Element => <ErrorTemplate message={NOT_FOUND_TEXT} />;
