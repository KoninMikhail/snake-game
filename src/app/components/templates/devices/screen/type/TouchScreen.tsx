import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { appDeviceTouchStateSelector } from '@store/slices/app.slice';
import { PropsWithChildren } from 'react';

export const TouchScreen = ({ children }: PropsWithChildren) => {
    const screen = useAppSelector(appDeviceTouchStateSelector);
    return <>{screen ? children : null}</>;
};
