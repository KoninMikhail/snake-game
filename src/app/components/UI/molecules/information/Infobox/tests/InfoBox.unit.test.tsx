import { screen } from '@testing-library/react';
import { InfoBox } from '@ui/molecules/information/Infobox/InfoBox';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('InfoBox', () => {
    const testContent = 'myMessage';
    const testIdChildren = 'infoboxIcon';

    it('correctly render when hidden', () => {
        const TestComponent = jest
            .fn()
            .mockImplementation(() => <svg data-testid={testIdChildren}>Icon</svg>);

        renderWithProviders(
            <InfoBox
                icon={<TestComponent data-testId={testIdChildren} />}
                align={'center'}
                message={testContent}
            />
        );
        expect(screen.getByText(testContent)).toBeInTheDocument();
        expect(screen.getByTestId(testIdChildren)).toBeInTheDocument();
    });
});
