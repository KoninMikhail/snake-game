import { PropsWithChildren } from 'react';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { appDeviceScreenTypeSelector } from '@store/slices/app.slice';

export const LargeScreen = ({ children }: PropsWithChildren) => {
    const screen = useAppSelector(appDeviceScreenTypeSelector);
    return <>{screen === 'large' ? children : null}</>;
};
