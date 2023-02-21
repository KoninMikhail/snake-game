import {LoaderOverlay} from '@ui/atoms/loaders/Loader/style/StyledLoader';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import {appPageStateSelector} from '@store/slices/app.slice';

/**
 * @name Loader
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it for showing overlay on page
 */
export const Loader = () => {
    const state = useAppSelector(appPageStateSelector);
    const isLoading = state === 'loading';
    return <LoaderOverlay show={isLoading} />;
};
