import getImagesPath from '@/helpers/getters/getImagesPath';

/**
 * Types
 */

export type ImageItem = {
    src: string;
    placeholder?: string;
    alt?: string;
};

type ImageSourceSet = {
    [key: string]: ImageItem;
};

type SourceId = string;

export type ImagesData = {
    [key: SourceId]: ImageSourceSet;
};

/**
 * Constants
 */

// path in ../public folder
const baseImagesPath = getImagesPath();

/**
 * Object with all images connected from /public folder.
 *
 * You can pick image from here win special utility getSoundSourceById
 * @see getSpecificImageForDevice
 */
export const imagesData: ImagesData = {
    logo: {
        default: {
            src: `${baseImagesPath}/Identity/Logo.png`,
            placeholder: `${baseImagesPath}/Identity/Logo_placeholder.png`,
        },
        small: {
            src: `${baseImagesPath}/Identity/Logo.png`,
            placeholder: `${baseImagesPath}/Identity/Logo_placeholder.png`,
        },
        middle: {
            src: `${baseImagesPath}/Identity/Logo.png`,
            placeholder: `${baseImagesPath}/Identity/Logo_placeholder.png`,
        },
        large: {
            src: `${baseImagesPath}/Identity/Logo.png`,
            placeholder: `${baseImagesPath}/Identity/Logo_placeholder.png`,
        },
    },
    background: {
        default: {
            placeholder: `${baseImagesPath}/backgrounds/placeholders/bg_animation.jpg`,
            src: `${baseImagesPath}/backgrounds/bg_animation.gif`,
        },
        small: {
            placeholder: `${baseImagesPath}/backgrounds/placeholders/bg_animation_mobile.jpg`,
            src: `${baseImagesPath}/backgrounds/bg_animation_mobile.gif`,
        },
        middle: {
            placeholder: `${baseImagesPath}/backgrounds/placeholders/bg_animation_tablet.jpg`,
            src: `${baseImagesPath}/backgrounds/bg_animation_tablet.gif`,
        },
        large: {
            placeholder: `${baseImagesPath}/backgrounds/placeholders/bg_animation.jpg`,
            src: `${baseImagesPath}/backgrounds/bg_animation.gif`,
        },
    },
    notFoundBackground: {
        default: {
            placeholder: `${baseImagesPath}/backgrounds/placeholders/not_found_placeholder.jpg`,
            src: `${baseImagesPath}/backgrounds/not_found.jpg`,
        },
    },
};
