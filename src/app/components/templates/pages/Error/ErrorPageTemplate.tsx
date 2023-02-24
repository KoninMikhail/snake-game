import { ErrorContainer } from '@templates/containers/ErrorContainer';
import { IErrorPage } from '@templates/pages/Error/ErrorPageTemplate.interface';
import { Text } from '@ui/atoms/typography/body/Text/Text';
import { HeavyCaption } from '@ui/atoms/typography/caption/HeavyCaption/HeavyCaption';

export const ErrorPageTemplate = ({ status, message }: IErrorPage) => {
    return (
        <ErrorContainer>
            {status && <HeavyCaption>{status}</HeavyCaption>}
            <Text>{message}</Text>
        </ErrorContainer>
    );
};
