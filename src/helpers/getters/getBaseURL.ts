import { Brand } from '@/types/brand';
import sendErrorCode from '@utils/sendErrorCode/sendErrorCode';

export type BaseUrl = Brand<string, 'baseUrl'>;

/**
 * @function getBaseUrl
 *
 * @returns A string with baseUrl
 */
const getBaseUrl = (): BaseUrl => {
    const baseUrl = window.location.href;
    if (!baseUrl) sendErrorCode('baseUrl does not exist');
    return baseUrl as BaseUrl;
};
export default getBaseUrl;
