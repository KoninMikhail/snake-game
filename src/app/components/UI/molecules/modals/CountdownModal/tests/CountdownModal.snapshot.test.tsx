import { CountdownModal } from '@ui/molecules/modals/CountdownModal/CountdownModal';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('CountdownModal', () => {
    it('equal snapshot when showed', async () => {
        const { container } = renderWithProviders(
            <CountdownModal visible={true} countStart={5} message={'message'} />
        );

        expect(container).toMatchSnapshot();
    });

    it('equal snapshot when hidden', async () => {
        const { container } = renderWithProviders(
            <CountdownModal visible={false} countStart={1} message={'message'} />
        );

        expect(container).toMatchSnapshot();
    });
});
