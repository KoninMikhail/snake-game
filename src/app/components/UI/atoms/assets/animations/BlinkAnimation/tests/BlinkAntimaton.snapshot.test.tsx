import { BlinkAnimation } from '../BlinkAnimation';
import { render } from '@testing-library/react';
import { IBaseTheme } from '@styles/theme';

/**
 * Mocks
 */
const fakeTheme = {
    animations: {
        blink: {
            duration: 1200,
            count: 'infinite',
            timing: 'step-start',
            fill: 'forwards',
        },
    },
} as unknown as IBaseTheme;

/**
 * Tests
 */
describe('BlinkAnimation', () => {
    it('equal snapshot', () => {
        const { container } = render(<BlinkAnimation theme={fakeTheme} />);
        expect(container).toMatchSnapshot();
    });
});
