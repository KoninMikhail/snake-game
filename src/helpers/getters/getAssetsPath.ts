import {Brand} from '@/types/brand';
import getBaseUrl from '@/helpers/getters/getBaseURL';
import {ASSETS_DIR} from '@constants/APP';
import sendErrorCode from '@utils/sendErrorCode/sendErrorCode';

type AssetsPath = Brand<string, 'assets'>;

/**
 * @function getAssetsPath
 *
 * It returns the path to the assets directory in /public folder
 *
 * @returns A string with path
 */
export default function getAssetsPath(): AssetsPath {
    const defaultAssetsPath = 'assets';
    const environmentPath = ASSETS_DIR;

    try {
        if (!environmentPath) {
            sendErrorCode(`assets path not found, and will replace to: ${defaultAssetsPath}`);
        }
        return (getBaseUrl() + '/' + environmentPath) as AssetsPath;
    } catch (e) {
        return (getBaseUrl() + '/' + defaultAssetsPath) as AssetsPath;
    }
}
