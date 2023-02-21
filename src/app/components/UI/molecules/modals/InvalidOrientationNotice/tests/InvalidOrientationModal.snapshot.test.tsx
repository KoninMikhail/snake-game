import {InvalidOrientationModal} from '../InvalidOrientationModal';
import {renderWithProviders} from '@utils/test-utils';

/**
 * Test
 */
describe('InvalidOrientationModal', () => {
    it('equal snapshot', () => {
        const { container } = renderWithProviders(
            <InvalidOrientationModal message={'test container content'} />
        );
        expect(container).toMatchSnapshot();
    });
});
