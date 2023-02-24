import { ExtraLargeCaption } from '@ui/atoms/typography/caption/ExtraLargeCaption/ExtraLargeCaption';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('ExtraLargeCaption', () => {
    it('equal to snapshot', () => {
        const { container } = renderWithProviders(
            <ExtraLargeCaption align={'center'}>Arriva</ExtraLargeCaption>
        );
        expect(container).toMatchSnapshot();
    });
});
