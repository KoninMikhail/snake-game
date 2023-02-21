import {ImagesData} from '@data/imagesData';
import {GetFromImagesFn} from '@/types/declare/get-from-images-fn';
import {ScreenType} from '@/types/screen';

/**
 * @function getImageSourceById
 *
 * It takes an image id, a screen type, and an object of images, and returns the image source for the
 * given screen type. If the image source for the given screen type doesn't exist, it returns the
 * default image source
 *
 * @param context - The context object that contains the image sources.
 * @param imageId - The id of the image you want to get the source for.
 * @param deviceScreenType - The screen type of the device.
 */
export const getImageSourceById: GetFromImagesFn<ImagesData, `${ScreenType}` | 'default'> = (
    context,
    imageId,
    deviceScreenType
) => {
    const imageSourcesList = context[imageId];
    const imageSourcesListHasDeviceImage = Object.hasOwn(imageSourcesList, deviceScreenType);

    if (imageSourcesListHasDeviceImage) {
        return imageSourcesList[deviceScreenType];
    }

    return imageSourcesList['default'];
};

export default getImageSourceById;
