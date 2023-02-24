import { waitFor } from '@testing-library/react';
import { CountdownModal } from '@ui/molecules/modals/CountdownModal/CountdownModal';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('CountdownModal', () => {
    it('equal snapshot when showed', async () => {
        const callback = jest.fn();

        renderWithProviders(
            <CountdownModal countStart={1} onCountdownEnd={callback} message={'message'} visible />
        );

        await waitFor(() => expect(callback).toHaveBeenCalledTimes(1), { timeout: 3000 });
    });
});
