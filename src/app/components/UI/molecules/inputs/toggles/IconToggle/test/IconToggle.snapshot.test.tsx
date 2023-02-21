import { renderWithProviders } from '@utils/test-utils';
import { IconToggle } from '@ui/molecules/inputs/toggles/IconToggle/IconToggle';
import { SoundOnIcon } from '@ui/atoms/assets/icons/SoundOnIcon/SoundOnIcon';
import { SoundOffIcon } from '@ui/atoms/assets/icons/SoundOffIcon/SoundOffIcon';

jest.mock('@ui/atoms/assets/icons/SoundOnIcon/SoundOnIcon', () => {
    return {
        SoundOnIcon: () => <>{'soundOnIcon'}</>,
    };
});
jest.mock('@ui/atoms/assets/icons/SoundOffIcon/SoundOffIcon', () => {
    return {
        SoundOffIcon: () => <>{'soundOffIcon'}</>,
    };
});

/**
 * Tests
 */
describe('IconToggle', () => {
    it('equal snapshot when true', () => {
        const { container } = renderWithProviders(
            <IconToggle
                iconWhenFalse={<SoundOffIcon />}
                iconWhenTrue={<SoundOnIcon />}
                size={'md'}
                state
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('equal snapshot when false', () => {
        const { container } = renderWithProviders(
            <IconToggle
                iconWhenFalse={<SoundOffIcon />}
                iconWhenTrue={<SoundOnIcon />}
                size={'md'}
                state={false}
            />
        );
        expect(container).toMatchSnapshot();
    });
});
