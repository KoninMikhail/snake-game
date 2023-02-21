import { IconToggle } from '@ui/molecules/inputs/toggles/IconToggle/IconToggle';
import { renderWithProviders } from '@utils/test-utils';
import { SoundOffIcon } from '@ui/atoms/assets/icons/SoundOffIcon/SoundOffIcon';
import { SoundOnIcon } from '@ui/atoms/assets/icons/SoundOnIcon/SoundOnIcon';
import { fireEvent, screen } from '@testing-library/react';

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
    it('should call callback when clicked', () => {
        const callback = jest.fn();

        renderWithProviders(
            <IconToggle
                iconWhenFalse={<SoundOffIcon />}
                iconWhenTrue={<SoundOnIcon />}
                size={'md'}
                state={true}
                onClick={callback}
            />
        );

        fireEvent(
            screen.getByText('soundOnIcon'),
            new MouseEvent('click', {
                bubbles: true,
            })
        );

        expect(callback).toHaveBeenCalledTimes(1);
    });
});
