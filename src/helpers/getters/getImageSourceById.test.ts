//Jest Test import { getImageSourceById } from './getImageSourceById';

import getImageSourceById from '@/helpers/getters/getImageSourceById';
import { ImagesData } from '@data/imagesData';
import getBaseUrl from '@/helpers/getters/getBaseURL';

describe('getImageSourceById', () => {
    const imagesData = {
        background: {
            default: {
                placeholder: `${getBaseUrl()}/backgrounds/placeholders/bg_animation.jpg`,
                src: `${getBaseUrl()}/backgrounds/bg_animation.gif`,
            },
            tablet: {
                placeholder: `${getBaseUrl()}/backgrounds/placeholders/bg_animation_tablet.jpg`,
                src: `${getBaseUrl()}/backgrounds/bg_animation_tablet.gif`,
            },
        },
    } as ImagesData;

    it('should return tablet image source', () => {
        const imageSource = getImageSourceById(imagesData, 'background', 'tablet');
        expect(imageSource.src).toEqual(imagesData.background.tablet.src);
        expect(imageSource.placeholder).toEqual(imagesData.background.tablet.placeholder);
    });
});
