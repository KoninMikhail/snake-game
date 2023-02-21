import {GetFromSoundFnsFn} from '@/types/declare/get-from-sound-fn';
import {SoundsData} from '@data/soundsData';

/**
 * @function getSoundSourceById
 *
 * `getSoundSourceById` is a function that takes a object with sound data, `soundID` and returns a sound source
 * by `soundID`.
 *
 * @param context - The object of the sound data.
 * @param soundID - The ID of the sound to get the source from.
 * @returns A function that takes a context and a soundID and returns a soundItem.
 */
export const getSoundSourceById: GetFromSoundFnsFn<SoundsData> = (context, soundID) => {
    return context[soundID];
};

export default getSoundSourceById;
