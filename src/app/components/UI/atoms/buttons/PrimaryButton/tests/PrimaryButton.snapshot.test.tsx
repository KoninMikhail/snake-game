import { render } from '@testing-library/react';
import { PrimaryButton } from '../PrimaryButton';
import { ThemeProvider } from 'styled-components';
import { IBaseTheme } from '@styles/theme';

/**
 * Mocks
 */
const fakeTheme = {
    colors: {
        body: '#ffffff',
        primary: 'deeppink',
        black: '#000000',
    },
    typography: {
        fontFamily: {
            body: `'Nineteen Eighty Seven', 'Segoe UI','Roboto','Oxygen','Ubuntu','Fira Sans','Droid Sans','Helvetica Neue',sans-serif`,
        },
        fontSize: {
            body: { mobile: '14px', tablet: '17px', desktop: '0.9vw' },
        },
    },
} as unknown as IBaseTheme;

/**
 * Test
 */
describe('PrimaryButton', () => {
    it('equal snapshot', () => {
        const { container } = render(
            <ThemeProvider theme={fakeTheme}>
                <PrimaryButton>Hello world</PrimaryButton>
            </ThemeProvider>
        );
        expect(container).toMatchSnapshot();
    });
});
