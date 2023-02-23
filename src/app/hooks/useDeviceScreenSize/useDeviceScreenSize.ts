import { between, down, up } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import { useMemo, useState } from 'react';
import { DeviceScreenSize } from '@/types/device';

/**
 * @name useDeviceScreenSize
 * @version 1.0.0
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for detect media queries
 *
 * @return {Object}
 */

const useDeviceScreenSize = () => {
    const [size, setSize] = useState<DeviceScreenSize | null>();
    const isSmall = useBreakpoint(down('md'));
    const isMiddle = useBreakpoint(between('md', 'xl'));
    const isLarge = useBreakpoint(up('xl'));

    useMemo(() => {
        if (isSmall) {
            setSize('small');
        }
        if (isMiddle) {
            setSize('middle');
        }
        if (isLarge) {
            setSize('large');
        }
    }, [isMiddle, isSmall, isLarge]);

    return {
        size,
        isSmall,
        isMiddle,
        isLarge,
    };
};

export default useDeviceScreenSize;
