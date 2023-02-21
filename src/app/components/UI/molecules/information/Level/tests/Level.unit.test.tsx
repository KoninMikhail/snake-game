import { screen } from '@testing-library/react';
import { Level } from '../Level';
import { renderWithProviders } from '@utils/test-utils';
import { GameData } from '@store/slices/game.slice';

describe('Level', () => {
    const downText = 'level';
    const upText = 'current';

    it('correctly render', async () => {
        const initialState = {
            preloadedState: { game: { level: 5 } as GameData },
        };
        renderWithProviders(<Level downText={downText} upText={upText} />, initialState);

        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText(downText)).toBeInTheDocument();
        expect(screen.getByText(upText)).toBeInTheDocument();
    });
});
