import { PrimaryButton } from '../PrimaryButton';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('PrimaryButton', () => {
    it('equal snapshot', () => {
        const { container } = renderWithProviders(<PrimaryButton>Hello world</PrimaryButton>);
        expect(container).toMatchSnapshot();
    });
});
