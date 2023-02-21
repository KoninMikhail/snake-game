import {MaxScore} from '../MaxScore';
import {renderWithProviders} from '@utils/test-utils';

/**
 * Tests
 */
describe('Score', () => {
    const label = 'record:';
    const value = 30;

    it('equal snapshot', () => {
        const {container} = renderWithProviders(<MaxScore value={value} label={label}/>);
        expect(container).toMatchSnapshot();
    });
});
