import { PropsWithChildren } from 'react';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { appDeviceScreenTypeSelector } from '@store/slices/app.slice';

export const DesktopScreen = ({ children }: PropsWithChildren) => {
    const screen = useAppSelector(appDeviceScreenTypeSelector);
    return <>{screen === 'desktop' ? children : null}</>;
};
