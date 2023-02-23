import { screen } from '@testing-library/react';
import { Text } from '../Text';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('Text', () => {
    const testContent = 'Arrive';
    const testId = 'text-test-id';

    it('correctly render', () => {
        renderWithProviders(<Text data-testid={testId}>{testContent}</Text>);
        expect(screen.getByTestId(testId)).toBeInTheDocument();
        expect(screen.getByTestId(testId)).toHaveTextContent(testContent);
    });

    it('correctly with non default tag', () => {
        renderWithProviders(
            <Text as={'button'} data-testid={testId}>
                {testContent}
            </Text>
        );
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('correctly with non default alignment', () => {
        renderWithProviders(
            <Text align={'center'} data-testid={testId}>
                {testContent}
            </Text>
        );
        expect(screen.getByTestId(testId)).toHaveStyleRule('text-align', 'center');
    });

    it('correctly with non default font weight', () => {
        renderWithProviders(
            <Text weight={'bold'} data-testid={testId}>
                {testContent}
            </Text>
        );
        expect(screen.getByTestId(testId)).toHaveStyleRule('font-weight', 'bold');
    });
});
