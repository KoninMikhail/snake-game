import { Caption } from '@ui/atoms/typography/caption/Caption/Caption';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('Caption', () => {
    it('equal to snapshot', () => {
        const { container } = renderWithProviders(<Caption align={'center'}>Arriva</Caption>);

        expect(container).toMatchSnapshot();
    });
});
