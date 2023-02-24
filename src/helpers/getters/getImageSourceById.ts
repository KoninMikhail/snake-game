import { ImagesData } from '@data/imagesData';
import { GetFromImagesFn } from '@/types/declare/get-from-images-fn';
import { DeviceScreenSize } from '@/types/device';

/**
 * @function getImageSourceById
 *
 * It takes an image id, a screen size, and an object of images, and returns the image source for the
 * given screen size. If the image source for the given screen size doesn't exist, it returns the
 * default image source
 *
 * @param context - The context object that contains the image sources.
 * @param imageId - The id of the image you want to get the source for.
 * @param deviceScreenSize - The screen size of the device.
 */
export const getImageSourceById: GetFromImagesFn<ImagesData, `${DeviceScreenSize}` | 'default'> = (
    context,
    imageId,
    deviceScreenSize
) => {
    const imageSourcesList = context[imageId];
    const imageSourcesListHasDeviceImage = Object.hasOwn(imageSourcesList, deviceScreenSize);

    if (imageSourcesListHasDeviceImage) {
        return imageSourcesList[deviceScreenSize];
    }

    return imageSourcesList['default'];
};

export default getImageSourceById;
