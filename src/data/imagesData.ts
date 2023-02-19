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
        mobile: {
            src: `${baseImagesPath}/Identity/Logo.png`,
            placeholder: `${baseImagesPath}/Identity/Logo_placeholder.png`,
        },
        tablet: {
            src: `${baseImagesPath}/Identity/Logo.png`,
            placeholder: `${baseImagesPath}/Identity/Logo_placeholder.png`,
        },
        desktop: {
            src: `${baseImagesPath}/Identity/Logo.png`,
            placeholder: `${baseImagesPath}/Identity/Logo_placeholder.png`,
        },
    },
    background: {
        default: {
            placeholder: `${baseImagesPath}/backgrounds/placeholders/bg_animation.jpg`,
            src: `${baseImagesPath}/backgrounds/bg_animation.gif`,
        },
        mobile: {
            placeholder: `${baseImagesPath}/backgrounds/placeholders/bg_animation_mobile.jpg`,
            src: `${baseImagesPath}/backgrounds/bg_animation_mobile.gif`,
        },
        tablet: {
            placeholder: `${baseImagesPath}/backgrounds/placeholders/bg_animation_tablet.jpg`,
            src: `${baseImagesPath}/backgrounds/bg_animation_tablet.gif`,
        },
        desktop: {
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
