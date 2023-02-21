import { render, screen } from '@testing-library/react';
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
    const testId = 'test-animation';

    it('without props correctly work', () => {
        render(<FadeAnimation theme={fakeTheme} data-testid={testId} />);
        expect(screen.getByTestId(testId)).toBeInTheDocument();
        expect(screen.getByTestId(testId)).toHaveStyleRule('animation-direction', 'reverse');
    });

    it('props correctly work', () => {
        render(
            <FadeAnimation direction={'in'} delay={500} theme={fakeTheme} data-testid={testId} />
        );
        expect(screen.getByTestId(testId)).toBeInTheDocument();
        expect(screen.getByTestId(testId)).toHaveStyleRule('animation-delay', '500ms');
        expect(screen.getByTestId(testId)).toHaveStyleRule('animation-direction', 'normal');
    });
});
