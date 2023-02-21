import { PropsWithChildren } from 'react';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { appDeviceOrientationSelector } from '@store/slices/app.slice';

export const OrientationLandscape = ({ children }: PropsWithChildren) => {
    const orientation = useAppSelector(appDeviceOrientationSelector);
    return <>{orientation === 'landscape' ? children : null}</>;
};
