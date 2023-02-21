import {TextLink} from '@ui/atoms/typography/link/TextLink';
import {renderWithProviders} from '@utils/test-utils';

/**
 * Test
 */
describe('TextLink', () => {
    it('equal to snapshot', () => {
        const { container } = renderWithProviders(<TextLink align={'center'}>Arriva</TextLink>);
        expect(container).toMatchSnapshot();
    });
});
