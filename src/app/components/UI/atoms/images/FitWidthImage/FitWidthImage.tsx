import {StyledFitWidthImage} from './style/StyledFitWidthImage';
import useProgressiveImageLoader from '@hooks/useProgressiveImageSource/useProgressiveImageSource';
import {IImage} from '@ui/atoms/images/images.interface';
import {useImagesContext} from '@context/ImagesContext';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import {appDeviceInfoSelector} from '@store/slices/app.slice';
import {Device} from '@/types/device-screen-type';
import getImageSourceById from '@/helpers/getters/getImageSourceById';

/**
 * @name FitWidthImage
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for logo state the page.
 *
 * @param id - image id in context
 * @param alt - logo alt attrib.
 */
export const FitWidthImage = ({sourceID, alt, ...rest}: IImage) => {
    const ctx = useImagesContext();
    const deviceInfo = useAppSelector(appDeviceInfoSelector);
    const deviceScreenType = deviceInfo.screen as Device;

    const dataForLoading = getImageSourceById(ctx, sourceID, deviceScreenType);
    const output = useProgressiveImageLoader(dataForLoading);

    return <StyledFitWidthImage src={output} alt={alt} {...rest} />;
};
