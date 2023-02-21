import {between, down, up} from 'styled-breakpoints';
import {useBreakpoint} from 'styled-breakpoints/react-styled';
import {useMemo, useState} from 'react';
import {Device} from '@/types/device-screen-type';

/**
 * @name useDeviceScreenType
 * @version 1.0.0
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for detect media queries
 *
 * @return {Object}
 */

const useDeviceScreenType = () => {
    const [screenType, setScreenType] = useState<Device | null>();
    const isMobile = useBreakpoint(down('md'));
    const isTablet = useBreakpoint(between('md', 'xl'));
    const isDesktop = useBreakpoint(up('xl'));

    useMemo(() => {
        if (isMobile) {
            setScreenType('mobile');
        }
        if (isTablet) {
            setScreenType('tablet');
        }
        if (isDesktop) {
            setScreenType('desktop');
        }
    }, [isTablet, isMobile, isDesktop]);

    return {
        type: screenType,
        isMobile,
        isTablet,
        isDesktop,
    };
};

export default useDeviceScreenType;
