import { PropsWithChildren } from 'react';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { appDeviceTouchStateSelector } from '@store/slices/app.slice';

export const NonTouchScreen = ({ children }: PropsWithChildren) => {
    const screen = useAppSelector(appDeviceTouchStateSelector);
    return <>{!screen ? children : null}</>;
};
