import { Copyright } from '../Copyright';
import { screen } from '@testing-library/react';
import { getYearRange } from '../utils/Copyright.utils';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */

describe('Copyright', () => {
    describe('Component', () => {
        const currentYear = new Date().getFullYear();
        const prevYear = currentYear - 5;
        const license = 'GNUv2';
        const author = 'Mickey Mouse';
        const testId = 'copyright-testid';

        it('renderWithProviderss copyright with count year', () => {
            const outputValue = `© ${currentYear} | ${author}. ${license}.`;
            renderWithProviders(
                <Copyright
                    data-testid={testId}
                    author={author}
                    creationYear={currentYear}
                    license={license}
                />
            );
            expect(screen.getByTestId(testId)).toHaveTextContent(outputValue);
        });

        it('renderWithProviderss copyright with prev year', () => {
            const outputValue = `© ${prevYear}-${currentYear} | ${author}. ${license}.`;
            renderWithProviders(
                <Copyright
                    author={author}
                    creationYear={prevYear}
                    license={license}
                    data-testid={testId}
                />
            );
            expect(screen.getByTestId(testId)).toHaveTextContent(outputValue);
        });
    });
    describe('Utils', () => {
        it('should return single count if count real year', () => {
            const startYear = new Date().getFullYear();
            const outputValue = new Date().getFullYear().toString();
            expect(getYearRange(startYear)).toEqual(outputValue);
        });

        it('should return string in format "startYear-currentYear"', () => {
            const startYear = new Date().getFullYear() - 5;
            const currentYear = new Date().getFullYear();
            const outputValue = `${startYear}-${currentYear}`;
            expect(getYearRange(startYear)).toEqual(outputValue);
        });
    });
});
