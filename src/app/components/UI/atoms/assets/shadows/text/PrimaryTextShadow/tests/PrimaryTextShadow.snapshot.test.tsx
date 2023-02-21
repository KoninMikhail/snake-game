import {render} from '@testing-library/react';
import {PrimaryTextShadow} from '@ui/atoms/assets/shadows/text/PrimaryTextShadow/PrimaryTextShadow';
import {ThemeProvider} from 'styled-components';
import {IBaseTheme} from '@styles/theme';

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
describe('PrimaryTextShadow', () => {
    it('equal snapshot', () => {
        const { container } = render(
            <ThemeProvider theme={fakeTheme}>
                <PrimaryTextShadow>
                    <div>{'Test ITextProps'}</div>
                </PrimaryTextShadow>
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });
});
