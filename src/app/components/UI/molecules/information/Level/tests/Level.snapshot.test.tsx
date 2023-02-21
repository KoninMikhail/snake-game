import { Level } from '../Level';
import { GameData } from '@store/slices/game.slice';
import { renderWithProviders } from '@utils/test-utils';

describe('Level', () => {
    const downText = 'level';
    const upText = 'current';

    it('equal snapshot', () => {
        const initialState = {
            preloadedState: { game: { level: 5 } as GameData },
        };
        const { container } = renderWithProviders(
            <Level downText={downText} upText={upText} />,
            initialState
        );

        expect(container).toMatchSnapshot();
    });
});
