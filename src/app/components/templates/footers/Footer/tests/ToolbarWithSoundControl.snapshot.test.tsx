import {render} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';
import {IBaseTheme} from '@styles/theme';
import {
    ToolbarWithSoundControlTemplate
} from '@templates/toolbars/ToolbarWithSoundControl/ToolbarWithSoundControlTemplate';
import {mockViewport} from 'jsdom-testing-mocks';

/**
 * Mocks
 */
// Fake theme
const fakeTheme = {
    icons: {
        xl: '3.6em',
    },
    gaps: {
        md: '1rem',
    },
} as unknown as IBaseTheme;

// fake content
const mockSoundContent = 'mocked SoundControl';
const mockLevelContent = 'mocked Level';

// fake component
jest.mock('@ui/organisms/SoundControl/SoundControl', () => ({
    SoundControl: () => mockSoundContent,
}));
jest.mock('@ui/molecules/information/Level/Level', () => ({
    Level: () => mockLevelContent,
}));

/**
 * Tests
 */
describe('ToolbarWithSoundControlDesktop', () => {
    it('Equals snapshot on mobile devices', () => {
        mockViewport({ width: '320px', height: '568px' });

        const { container } = render(
            <ThemeProvider theme={fakeTheme}>
                <ToolbarWithSoundControlTemplate />
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });

    it('Equals snapshot on tablet devices', () => {
        mockViewport({ width: '885px', height: '768px' });

        const { container } = render(
            <ThemeProvider theme={fakeTheme}>
                <ToolbarWithSoundControlTemplate />
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });
    it('Equals snapshot on desktop devices', () => {
        mockViewport({ width: '1920px', height: '1080px' });

        const { container } = render(
            <ThemeProvider theme={fakeTheme}>
                <ToolbarWithSoundControlTemplate />
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });
});
