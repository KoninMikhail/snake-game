import {renderWithProviders} from '@utils/test-utils';
import {PauseModal} from '@ui/molecules/modals/PauseModal/PauseModal';

/**
 * Test
 */
describe('PauseModal', () => {
    it('equal snapshot', () => {
        const { container } = renderWithProviders(
            <PauseModal message={'message'} headline={'headline'} />
        );
        expect(container).toMatchSnapshot();
    });
});
