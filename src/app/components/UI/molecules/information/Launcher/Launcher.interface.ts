import { CSSProperties } from 'react';
import { IImage } from '@ui/atoms/images/images.interface';

export interface ILauncher {
    image: IImage;
    message: string;
    style?: CSSProperties;
}
