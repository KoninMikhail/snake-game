import { ImagesData } from '@data/imagesData';

export interface IImage {
    sourceID: keyof ImagesData;
    alt?: string;
}
