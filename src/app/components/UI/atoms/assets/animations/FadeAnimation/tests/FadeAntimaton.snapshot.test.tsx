import { render } from '@testing-library/react';
import { FadeAnimation } from '../FadeAnimation';
import { IBaseTheme } from '@styles/theme';

/**
 * Mocks
 */
const fakeTheme = {
    animations: {
        fade: {
            duration: 800,
            count: 1,
            timing: 'fade',
            fill: 'forwards',
        },
    },
} as unknown as IBaseTheme;

/**
 * Tests
 */
describe('FadeAnimation', () => {
    it('equal snapshot', () => {
        const { container } = render(
            <FadeAnimation direction={'in'} delay={500} theme={fakeTheme} />
        );
        expect(container).toMatchSnapshot();
    });
});
