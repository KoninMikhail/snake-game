import { screen } from '@testing-library/react';
import { TextLink } from '@ui/atoms/typography/link/TextLink';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('TextLink', () => {
    it('have correctly with non default tag', () => {
        renderWithProviders(<TextLink as={'button'}>Arriva</TextLink>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('have correctly with non default alignment', () => {
        renderWithProviders(<TextLink align={'center'}>Arriva</TextLink>);
        expect(screen.getByText('Arriva')).toHaveStyleRule('text-align', 'center');
    });

    it('have correctly with non default font weight', () => {
        renderWithProviders(<TextLink weight={'bold'}>Arriva</TextLink>);
        expect(screen.getByText('Arriva')).toHaveStyleRule('font-weight', 'bold');
    });
});
