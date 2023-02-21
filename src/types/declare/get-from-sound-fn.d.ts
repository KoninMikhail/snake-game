import { SoundFX } from '@data/soundsData';

declare type GetFromSoundFnsFn<T> = (context: T, soundID: keyof T) => SoundFX;
