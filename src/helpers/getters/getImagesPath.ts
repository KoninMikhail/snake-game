import { Brand } from '@/types/brand';
import getAssetsPath from '@/helpers/getters/getAssetsPath';
import { IMAGES_DIR } from '@constants/APP';

type ImagesPath = Brand<string, 'images'>;

/**
 * @function getImagesPath
 *
 * Using for get `images` path in /public folder
 *
 * @returns A string with path
 */
export default function getImagesPath(): ImagesPath {
    const defaultImagesPath = 'images';
    const environmentPath = IMAGES_DIR ?? defaultImagesPath;
    return (getAssetsPath() + '/' + environmentPath) as ImagesPath;
}
