import { fireEvent, screen } from '@testing-library/react';
import { GameOverModal } from '@ui/molecules/modals/GameOverModal/GameOverModal';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('GameOverModal', () => {
    it('equal snapshot when showed', () => {
        const callback = jest.fn();

        renderWithProviders(
            <GameOverModal onPressButton={callback} buttonLabel={'label'} headline={'headline'} />
        );

        fireEvent.click(screen.getByRole('button'));

        expect(callback).toHaveBeenCalledTimes(1);
    });
});
