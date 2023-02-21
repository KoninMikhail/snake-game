import {screen, waitFor} from '@testing-library/react';
import {FitWidthImage} from '../FitWidthImage';
import {LOAD_SUCCESS_SRC, PLACEHOLDER_SRC, PLACEHOLDER_SRC_MOBILE} from '@/setupTests';
import {renderWithProviders} from '@utils/test-utils';
import {AppGlobalState} from '@store/slices/app.slice';

/**
 * Constants
 */
const IMAGE_ALT = 'app Name Here';
const IMAGE_TEST_ID = 'custom-logo';

/**
 * Tests
 */
describe('FitWidthImage', () => {
    it('should replace placeholder url to logo url', async () => {
        renderWithProviders(
            <>
                <FitWidthImage sourceID={'logo'} data-testid={IMAGE_TEST_ID} />
            </>
        );

        expect(screen.getByTestId(IMAGE_TEST_ID)).toHaveAttribute('src', PLACEHOLDER_SRC);

        await waitFor(
            () => {
                expect(screen.getByTestId(IMAGE_TEST_ID)).toHaveAttribute('src', LOAD_SUCCESS_SRC);
            },
            { timeout: 1000 }
        );
    });

    it('should render without placeholder', () => {
        renderWithProviders(
            <FitWidthImage
                sourceID={'logoWithoutPlaceholder'}
                alt={IMAGE_ALT}
                data-testid={IMAGE_TEST_ID}
            />
        );

        expect(screen.getByTestId(IMAGE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(IMAGE_TEST_ID).tagName.toLowerCase()).toEqual('img');
        expect(screen.getByTestId(IMAGE_TEST_ID)).toHaveAttribute('src', LOAD_SUCCESS_SRC);
        expect(screen.getByTestId(IMAGE_TEST_ID)).toHaveAttribute('alt', IMAGE_ALT);
    });

    it('should render mobile logo', () => {
        const initialState = {
            preloadedState: { app: { device: { screen: 'mobile' } } as AppGlobalState },
        };

        renderWithProviders(
            <FitWidthImage sourceID={'logo'} alt={IMAGE_ALT} data-testid={IMAGE_TEST_ID} />,
            initialState
        );

        expect(screen.getByTestId(IMAGE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(IMAGE_TEST_ID).tagName.toLowerCase()).toEqual('img');
        expect(screen.getByTestId(IMAGE_TEST_ID)).toHaveAttribute('src', PLACEHOLDER_SRC_MOBILE);
        expect(screen.getByTestId(IMAGE_TEST_ID)).toHaveAttribute('alt', IMAGE_ALT);
    });
});
