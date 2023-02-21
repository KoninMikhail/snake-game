import {fireEvent, screen} from '@testing-library/react';
import {SoundControl} from '../SoundControl';
import {soundActions} from '@store/slices/sound.slice';
import * as reduxHooks from 'react-redux';
import {renderWithProviders} from '@utils/test-utils';

/**
 * Mocks
 */

// react-redux
jest.mock('react-redux');

// dispatch
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

// soundOnIcon
jest.mock('@ui/atoms/assets/icons/SoundOnIcon/SoundOnIcon', () => ({
    SoundOnIcon: () => 'mocked soundOnIcon',
}));

// soundOffIcon
jest.mock('@ui/atoms/assets/icons/SoundOffIcon/SoundOffIcon', () => ({
    SoundOffIcon: () => 'mocked soundOffIcon',
}));

/**
 * Test
 */
describe('SoundControlToggle', () => {
    const testid = 'sounds-testid';

    it('should dispatch actions', () => {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch); // count calls

        const mockedSetSound = jest.spyOn(soundActions, 'setSound'); // validate action

        renderWithProviders(<SoundControl size={'xl'} data-testid={testid} />);

        fireEvent.click(screen.getByTestId(testid));

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockedSetSound).toHaveBeenCalledWith(false);
    });
});
