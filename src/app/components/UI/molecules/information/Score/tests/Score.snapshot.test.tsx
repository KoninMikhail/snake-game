import {Score} from '../Score';
import {GameData} from '@store/slices/game.slice';
import {renderWithProviders} from '@utils/test-utils';

/**
 * Tests
 */
describe('Score', () => {
    it('equal snapshot', () => {
        const mockScore = 30;

        const initialState = {
            preloadedState: {game: {score: mockScore} as GameData},
        };
        const {container} = renderWithProviders(<Score/>, initialState);

        expect(container).toMatchSnapshot();
    });
});
