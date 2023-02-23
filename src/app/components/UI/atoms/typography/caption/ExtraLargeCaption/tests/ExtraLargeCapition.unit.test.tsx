import { screen } from '@testing-library/react';
import { ExtraLargeCaption } from '@ui/atoms/typography/caption/ExtraLargeCaption/ExtraLargeCaption';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('ExtraLargeCaption', () => {
    it('have correctly with non default tag', () => {
        renderWithProviders(<ExtraLargeCaption as={'button'}>Arriva</ExtraLargeCaption>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('have correctly with non default alignment', () => {
        renderWithProviders(<ExtraLargeCaption align={'center'}>Arriva</ExtraLargeCaption>);
        expect(screen.getByText('Arriva')).toHaveStyleRule('text-align', 'center');
    });

    it('have correctly with non default font weight', () => {
        renderWithProviders(<ExtraLargeCaption weight={'bold'}>Arriva</ExtraLargeCaption>);
        expect(screen.getByText('Arriva')).toHaveStyleRule('font-weight', 'bold');
    });
});
