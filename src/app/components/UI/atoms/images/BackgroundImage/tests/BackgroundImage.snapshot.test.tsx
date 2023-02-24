import { BackgroundImage } from '@ui/atoms/images/BackgroundImage/BackgroundImage';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Constants
 */
const IMAGE_ALT = 'app Name Here';
const IMAGE_TEST_ID = 'custom-logo';

/**
 * Tests
 */
describe('BackgroundImage', () => {
    it('equal snapshot', () => {
        const { container } = renderWithProviders(
            <BackgroundImage
                sourceID={'notFoundBackground'}
                alt={IMAGE_ALT}
                data-testid={IMAGE_TEST_ID}
            />
        );
        expect(container).toMatchSnapshot();
    });
});
