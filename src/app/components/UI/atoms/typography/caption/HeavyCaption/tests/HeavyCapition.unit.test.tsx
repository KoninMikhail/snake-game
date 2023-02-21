import {screen} from '@testing-library/react';
import {HeavyCaption} from '@ui/atoms/typography/caption/HeavyCaption/HeavyCaption';
import {renderWithProviders} from '@utils/test-utils';

/**
 * Test
 */
describe('HeavyCaption', () => {
    it('have correctly with non default tag', () => {
        renderWithProviders(<HeavyCaption as={'button'}>Arriva</HeavyCaption>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('have correctly with non default alignment', () => {
        renderWithProviders(<HeavyCaption align={'center'}>Arriva</HeavyCaption>);
        expect(screen.getByText('Arriva')).toHaveStyleRule('text-align', 'center');
    });

    it('have correctly with non default font weight', () => {
        renderWithProviders(<HeavyCaption weight={'bold'}>Arriva</HeavyCaption>);
        expect(screen.getByText('Arriva')).toHaveStyleRule('font-weight', 'bold');
    });
});
