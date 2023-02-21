import {GameOverModal} from '@ui/molecules/modals/GameOverModal/GameOverModal';
import {renderWithProviders} from '@utils/test-utils';

/**
 * Test
 */
describe('InvalidOrientationModal', () => {
    it('equal snapshot when showed', () => {
        const {container} = renderWithProviders(
            <GameOverModal buttonLabel={'buttonLabel'} headline={'heading'} onPressButton={() => 'onClick'}/>
        );
        expect(container).toMatchSnapshot();
    });
});
