import {screen} from '@testing-library/react';
import {Caption} from '@ui/atoms/typography/caption/Caption/Caption';
import {renderWithProviders} from "@utils/test-utils";

/**
 * Test
 */
describe('Caption', () => {
    it('have correctly with non default tag', () => {
        renderWithProviders(
            <Caption as={'button'}>Arriva</Caption>
        );
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('have correctly with non default alignment', () => {
        renderWithProviders(
            <Caption align={'center'}>Arriva</Caption>
        );
        expect(screen.getByText('Arriva')).toHaveStyleRule('text-align', 'center');
    });

    it('have correctly with non default font weight', () => {
        renderWithProviders(
            <Caption weight={'bold'}>Arriva</Caption>
        );
        expect(screen.getByText('Arriva')).toHaveStyleRule('font-weight', 'bold');
    });
});
