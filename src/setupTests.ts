import '@testing-library/jest-dom';
import 'jest-styled-components';

/**
 * Images
 */
export const LOAD_FAILURE_SRC = 'LOAD_FAILURE_SRC';
export const LOAD_SUCCESS_SRC = 'LOAD_SUCCESS_SRC';
export const PLACEHOLDER_SRC = 'PLACEHOLDER_SRC';
export const PLACEHOLDER_SRC_MOBILE = 'PLACEHOLDER_SRC_MOBILE';
export const LOAD_SUCCESS_SRC_MOBILE = 'LOAD_SUCCESS_SRC_MOBILE';
export const PLACEHOLDER_SRC_TABLET = 'PLACEHOLDER_SRC_TABLET';
export const LOAD_SUCCESS_SRC_TABLET = 'LOAD_SUCCESS_SRC_TABLET';

// mocks
export const mockImagesData = {
    logo: {
        default: {
            src: LOAD_SUCCESS_SRC,
            placeholder: PLACEHOLDER_SRC,
        },
        small: {
            src: LOAD_SUCCESS_SRC_MOBILE,
            placeholder: PLACEHOLDER_SRC_MOBILE,
        },
    },
    logoWithoutPlaceholder: {
        default: {
            src: LOAD_SUCCESS_SRC,
        },
    },
    background: {
        default: {
            placeholder: PLACEHOLDER_SRC,
            src: LOAD_SUCCESS_SRC,
        },
        middle: {
            placeholder: PLACEHOLDER_SRC_TABLET,
            src: LOAD_SUCCESS_SRC_TABLET,
        },
    },
    notFoundBackground: {
        default: {
            src: LOAD_SUCCESS_SRC,
        },
    },
};

// lazy-loading
beforeAll(() => {
    Object.defineProperty(global.Image.prototype, 'src', {
        set(src) {
            if (src === LOAD_FAILURE_SRC) {
                setTimeout(() => this.onerror(new Error('mocked error')));
            } else if (src === LOAD_SUCCESS_SRC) {
                setTimeout(() => this.onload());
            }
        },
    });
}, 2000);

/**
 * SOUNDS
 */
export const SOUND_SOURCE = 'SOUND_SRC';
export const SOUND_VOLUME = 0.15;
export const SOUND_PRELOAD = true;

export const mockSoundData = {
    start: {
        src: SOUND_SOURCE,
        options: {
            volume: SOUND_VOLUME,
            preload: SOUND_PRELOAD,
        },
    },
};
