import {useState} from 'react';
import {useEffectOnce, useEventListener} from 'usehooks-ts';
import {DeviceOrientation} from '@/types/device';

/**
 * @name useWindowOrientation
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for getting window orientation.
 *
 * @param {Orientation} [options.defaultOrientation=portrait] - The mobile orientation to return when there is no window
 * @returns An object containing the results of the orientation query in both string and boolean form
 */
export default function useWindowOrientation() {
    const [orientation, setOrientation] = useState<DeviceOrientation>('landscape');

    const handleUpdateOrientation = () => {
        switch (screen.orientation.type) {
            case 'landscape-primary':
                setOrientation('landscape');
                break;
            case 'landscape-secondary':
                setOrientation('landscape');
                break;
            case 'portrait-secondary':
            case 'portrait-primary':
                setOrientation('portrait');
                break;
            default:
                alert('Your browser does not supported. May be incorrectly application work');
        }
    };

    useEffectOnce(handleUpdateOrientation);
    useEventListener('resize', handleUpdateOrientation);

    return {
        orientation,
        isPortraitOrientation: orientation === 'portrait',
        isLandscapeOrientation: orientation === 'landscape',
    };
}
