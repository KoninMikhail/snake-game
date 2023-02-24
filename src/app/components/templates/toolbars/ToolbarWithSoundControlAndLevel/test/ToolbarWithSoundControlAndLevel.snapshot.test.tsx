import { renderWithProviders } from '@utils/test-utils';
import { AppGlobalState } from '@store/slices/app.slice';
import { ToolbarWithSoundControlAndLevel } from '@templates/toolbars/ToolbarWithSoundControlAndLevel/ToolbarWithSoundControlAndLevel';

/**
 * Mocks
 */

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
    it('Equals snapshot on small screens', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'small' } } as AppGlobalState },
        };

        const { container } = renderWithProviders(
            <ToolbarWithSoundControlAndLevel
                level={{ upText: 'current', downText: 'level test' }}
            />,
            preloadedState
        );

        expect(container).toMatchSnapshot();
    });

    it('Equals snapshot on middle screen devices', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'middle' } } as AppGlobalState },
        };

        const { container } = renderWithProviders(
            <ToolbarWithSoundControlAndLevel
                level={{ upText: 'current', downText: 'level test' }}
            />,
            preloadedState
        );

        expect(container).toMatchSnapshot();
    });
    it('Equals snapshot on large screen devices', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'large' } } as AppGlobalState },
        };

        const { container } = renderWithProviders(
            <ToolbarWithSoundControlAndLevel
                level={{ upText: 'current', downText: 'level test' }}
            />,
            preloadedState
        );

        expect(container).toMatchSnapshot();
    });
});
