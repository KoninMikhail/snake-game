import { BlinkAnimation } from '../BlinkAnimation';
import { render, screen } from '@testing-library/react';
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
    const testId = 'test-animation';

    it('delayBeforeChange prop correctly work', () => {
        render(<BlinkAnimation delay={600} theme={fakeTheme} data-testid={testId} />);
        expect(screen.getByTestId(testId)).toBeInTheDocument();
        expect(screen.getByTestId(testId)).toHaveStyleRule('animation-delay', '600ms');
    });
});
