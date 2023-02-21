import { renderWithProviders } from '@utils/test-utils';
import { Cell } from '@ui/molecules/modules/Cell/Cell';
import { GameData } from '@store/slices/game.slice';

describe('Cell', () => {
    it('should be equal snapshot with stock cell', () => {
        const { container } = renderWithProviders(<Cell index={1} />);
        expect(container).toMatchSnapshot();
    });
    it('should be equal snapshot with fruit cell', () => {
        const preloadedState = {
            game: { fruit: 15, snake: { points: [12, 13, 14], head: 14 } } as GameData,
        };
        const { container } = renderWithProviders(<Cell index={15} />, { preloadedState });
        expect(container).toMatchSnapshot();
    });

    it('should be equal snapshot with snakeHead cell', () => {
        const preloadedState = {
            game: { fruit: 14, snake: { points: [12, 13, 14], head: 14 } } as GameData,
        };
        const { container } = renderWithProviders(<Cell index={15} />, { preloadedState });
        expect(container).toMatchSnapshot();
    });

    it('should be equal snapshot with snakeSection cell', () => {
        const preloadedState = {
            game: { fruit: 13, snake: { points: [12, 13, 14], head: 14 } } as GameData,
        };
        const { container } = renderWithProviders(<Cell index={15} />, { preloadedState });
        expect(container).toMatchSnapshot();
    });
});
