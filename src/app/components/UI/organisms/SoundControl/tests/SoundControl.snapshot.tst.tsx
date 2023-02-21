import {SoundControl} from '../SoundControl';
import {renderWithProviders} from '@utils/test-utils';
import {SoundsState} from '@store/slices/sound.slice';

// soundOnIcon
jest.mock('@ui/atoms/assets/icons/SoundOnIcon/SoundOnIcon', () => ({
    SoundOnIcon: () => 'mocked soundOnIcon',
}));

// soundOffIcon
jest.mock('@ui/atoms/assets/icons/SoundOffIcon/SoundOffIcon', () => ({
    SoundOffIcon: () => 'mocked SoundOffIcon',
}));

/**
 * Tests
 */
describe('SoundControlToggle', () => {
    it('correctly render when sounds off', () => {
        const preloadedState = { sounds: { isEnabled: false } as SoundsState };
        const { container } = renderWithProviders(<SoundControl size={'xl'} />, { preloadedState });
        expect(container).toMatchSnapshot();
    });

    it('correctly render when sounds on', () => {
        const preloadedState = { sounds: { isEnabled: true } as SoundsState };
        const { container } = renderWithProviders(<SoundControl size={'xl'} />, {
            preloadedState: preloadedState,
        });
        expect(container).toMatchSnapshot();
    });
});
