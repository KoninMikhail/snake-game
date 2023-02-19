import { ImageItem } from '@data/imagesData';

declare type GetFromImagesFn<T, S> = (
    context: T,
    sourceId: keyof T,
    deviceScreenType: S
) => ImageItem;
