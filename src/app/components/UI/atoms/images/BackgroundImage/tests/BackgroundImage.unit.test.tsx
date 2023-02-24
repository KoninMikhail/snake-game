import { screen, waitFor } from '@testing-library/react';
import { BackgroundImage } from '@ui/atoms/images/BackgroundImage/BackgroundImage';
import { renderWithProviders } from '@utils/test-utils';
import { LOAD_SUCCESS_SRC, PLACEHOLDER_SRC, PLACEHOLDER_SRC_TABLET } from '@/setupTests';
import { FitWidthImage } from '@ui/atoms/images/FitWidthImage/FitWidthImage';
import { AppGlobalState } from '@store/slices/app.slice';

/**
 * Constants
 */
const IMAGE_ALT = 'app Name Here';
const IMAGE_TEST_ID = 'custom-logo';

/**
 * Tests
 */
describe('BackgroundImage', () => {
    it('should replace placeholder url to logo url', async () => {
        renderWithProviders(
            <>
                <BackgroundImage sourceID={'background'} data-testid={IMAGE_TEST_ID} />
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
            <BackgroundImage
                sourceID={'notFoundBackground'}
                alt={IMAGE_ALT}
                data-testid={IMAGE_TEST_ID}
            />
        );

        expect(screen.getByTestId(IMAGE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(IMAGE_TEST_ID).tagName.toLowerCase()).toEqual('img');
        expect(screen.getByTestId(IMAGE_TEST_ID)).toHaveAttribute('src', LOAD_SUCCESS_SRC);
        expect(screen.getByTestId(IMAGE_TEST_ID)).toHaveAttribute('alt', IMAGE_ALT);
    });

    it('should render middle background', async () => {
        const initialState = {
            preloadedState: { app: { device: { screen: 'middle' } } as AppGlobalState },
        };

        renderWithProviders(
            <FitWidthImage sourceID={'background'} alt={IMAGE_ALT} data-testid={IMAGE_TEST_ID} />,
            initialState
        );

        expect(screen.getByTestId(IMAGE_TEST_ID)).toBeInTheDocument();
        expect(screen.getByTestId(IMAGE_TEST_ID).tagName.toLowerCase()).toEqual('img');
        expect(screen.getByTestId(IMAGE_TEST_ID)).toHaveAttribute('alt', IMAGE_ALT);

        await waitFor(
            () => {
                expect(screen.getByTestId(IMAGE_TEST_ID)).toHaveAttribute(
                    'src',
                    PLACEHOLDER_SRC_TABLET
                );
            },
            { timeout: 1000 }
        );
    });
});
