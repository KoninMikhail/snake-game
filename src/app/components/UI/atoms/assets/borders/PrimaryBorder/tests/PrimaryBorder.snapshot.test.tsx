import {render} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';
import {IBaseTheme} from '@styles/theme';
import {PrimaryBorder} from '@ui/atoms/assets/borders/PrimaryBorder/PrimaryBorder';

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
describe('PrimaryBorder', () => {
    const testClassName = 'testElement';
    const testId = 'testElementID';

    it('return element with valid styles', () => {
        const { container } = render(
            <ThemeProvider theme={fakeTheme}>
                <PrimaryBorder>
                    <div data-testid={testId} className={testClassName}>
                        Test Element
                    </div>
                </PrimaryBorder>
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });
});
