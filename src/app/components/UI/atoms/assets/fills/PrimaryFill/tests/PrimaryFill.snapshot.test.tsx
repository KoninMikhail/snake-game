import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { PrimaryFill } from '@ui/atoms/assets/fills/PrimaryFill/PrimaryFill';
import { IBaseTheme } from '@styles/theme';

/**
 * Mocks
 */
const fakeTheme = {
    colors: {
        primary: 'deeppink',
    },
} as unknown as IBaseTheme;

/**
 * Tests
 */
describe('Primary IFillProps', () => {
    const testClassName = 'testElement';
    const testId = 'testElementID';

    it('equal snapshots', () => {
        const { container } = render(
            <ThemeProvider theme={fakeTheme}>
                <PrimaryFill>
                    <div data-testid={testId} className={testClassName}>
                        Test Element
                    </div>
                </PrimaryFill>
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });
});
