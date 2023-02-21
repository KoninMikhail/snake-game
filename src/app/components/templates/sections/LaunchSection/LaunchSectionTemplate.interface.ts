import { IImage } from '@ui/atoms/images/images.interface';

export interface ILaunchSectionTemplate {
    image: IImage;
    message: string;
    keyboardKeysForLaunch: string[];
    routeAfterLaunch: string;
}
