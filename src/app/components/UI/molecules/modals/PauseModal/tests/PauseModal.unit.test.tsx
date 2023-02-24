import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/test-utils';
import { PauseModal } from '@ui/molecules/modals/PauseModal/PauseModal';

/**
 * Test
 */
describe('GameOverModal', () => {
    it('equal snapshot when showed', () => {
        const callback = jest.fn();

        renderWithProviders(
            <PauseModal message={'message'} onClick={callback} headline={'headline'} />
        );

        fireEvent.click(screen.getByText('message'), {
            bubbles: true,
        });

        expect(callback).toHaveBeenCalledTimes(1);
    });
});
