import { FitWidthImage } from '../FitWidthImage';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Constants
 */
const IMAGE_ALT = 'app Name Here';
const IMAGE_TEST_ID = 'custom-logo';

/**
 * Tests
 */
describe('FitWidthImage', () => {
    it('equal snapshot', () => {
        const { container } = renderWithProviders(
            <FitWidthImage sourceID={'logo'} alt={IMAGE_ALT} data-testid={IMAGE_TEST_ID} />
        );

        expect(container).toMatchSnapshot();
    });
});
