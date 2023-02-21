import {Copyright} from '@ui/molecules/information/Copyright/Copyright';
import {renderWithProviders} from '@utils/test-utils';

/**
 * Test
 */
describe('Copyright', () => {
    const year = new Date('July 20, 69 00:20:18').getFullYear();
    const license = 'GNUv2';
    const author = 'Mickey Mouse';

    it('equal snapshot', () => {
        const { container } = renderWithProviders(
            <Copyright author={author} creationYear={year} license={license} />
        );
        expect(container).toMatchSnapshot();
    });
});
