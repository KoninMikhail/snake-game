import useProgressiveImageLoader from '@hooks/useProgressiveImageSource/useProgressiveImageSource';
import { StyledBackgroundImage } from './style/StyledBackgroundImage';
import { useImagesContext } from '@context/ImagesContext';
import { DeviceScreenSize } from '@/types/device';
import getImageSourceById from '@/helpers/getters/getImageSourceById';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { appDeviceInfoSelector } from '@store/slices/app.slice';
import { IImage } from '@ui/atoms/images/images.interface';

/**
 * @name BackgroundImage
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it for a creation background
 *
 * @param id - image id in context
 * @param alt - logo alt attrib.
 */

export const BackgroundImage = ({ sourceID, alt, ...rest }: IImage) => {
    const ctx = useImagesContext();
    const deviceInfo = useAppSelector(appDeviceInfoSelector);
    const deviceScreenSize = deviceInfo.screen as DeviceScreenSize;

    const dataForLoading = getImageSourceById(ctx, sourceID, deviceScreenSize);
    const output = useProgressiveImageLoader(dataForLoading);

    return <StyledBackgroundImage src={output} alt={alt} {...rest} />;
};
