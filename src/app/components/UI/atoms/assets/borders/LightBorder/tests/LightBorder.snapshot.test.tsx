import {render} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';
import {IBaseTheme} from '@styles/theme';
import {LightBorder} from '@ui/atoms/assets/borders/LightBorder/LightBorder';

/**
 * Mocks
 */
const fakeTheme = {
    colors: {
        light: 'white',
    },
} as unknown as IBaseTheme;

/**
 * Tests
 */
describe('LightBorder', () => {
    const testClassName = 'testElement';
    const testId = 'testElementID';

    it('return element with valid styles', () => {
        const { container } = render(
            <ThemeProvider theme={fakeTheme}>
                <LightBorder>
                    <div data-testid={testId} className={testClassName}>
                        Test Element
                    </div>
                </LightBorder>
            </ThemeProvider>
        );
        expect(container).toMatchSnapshot();
    });
});
