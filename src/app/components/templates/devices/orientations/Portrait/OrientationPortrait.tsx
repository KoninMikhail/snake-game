import { PropsWithChildren } from 'react';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { appDeviceOrientationSelector } from '@store/slices/app.slice';

export const OrientationPortrait = ({ children }: PropsWithChildren) => {
    const orientation = useAppSelector(appDeviceOrientationSelector);
    return <>{orientation === 'portrait' ? children : null}</>;
};
