import { Brand } from '@/types/brand';
import getAssetsPath from '@/helpers/getters/getAssetsPath';
import { SOUNDS_DIR } from '@constants/APP';

export type SoundsPath = Brand<string, 'sounds'>;

/**
 * @function getSoundsPath
 *
 * Using for get `sounds` path in /public folder
 */
export default function getSoundsPath(): SoundsPath {
    const defaultSoundsPath = 'sounds';
    const environmentPath = SOUNDS_DIR ?? defaultSoundsPath;
    return (getAssetsPath() + '/' + environmentPath) as SoundsPath;
}
