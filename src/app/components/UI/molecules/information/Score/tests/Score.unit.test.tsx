import { screen } from '@testing-library/react';
import { Score } from '../Score';
import padCharactersLeft from '@utils/padCharactersLeft/padCharactersLeft';
import { renderWithProviders } from '@utils/test-utils';
import { GameData } from '@store/slices/game.slice';

/**
 * Tests
 */
describe('Score', () => {
    const mockScore = Math.floor(Math.random() * 30);

    it('correctly renders', () => {
        const initialState = {
            preloadedState: { game: { score: mockScore } as GameData },
        };
        renderWithProviders(<Score align={'left'} />, initialState);
        expect(screen.getByText(padCharactersLeft(mockScore, 6))).toBeInTheDocument();
    });
});
