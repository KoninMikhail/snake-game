import getSoundsPath from '@/helpers/getters/getSoundsPath';

type SoundFXOptions = {
    volume: number;
    soundEnabled?: boolean;
    preload?: boolean;
};

export type SoundFX = {
    src: string;
    options: SoundFXOptions;
};

type SoundID = string;

export interface SoundsData {
    [key: SoundID]: SoundFX;
}

const baseSoundsPath = getSoundsPath();

export const soundsData: SoundsData = {
    start: {
        src: `${baseSoundsPath}/start.mp3`,
        options: {
            volume: 0.15,
            preload: true,
        },
    },
    toggleSound: {
        src: `${baseSoundsPath}/sound_toggle.mp3`,
        options: {
            volume: 0.1,
            preload: true,
        },
    },
    gameStart: {
        src: `${baseSoundsPath}/game/game_start.mp3`,
        options: {
            volume: 0.15,
            preload: true,
        },
    },
    gameOver: {
        src: `${baseSoundsPath}/game/game_over.mp3`,
        options: {
            volume: 0.15,
            preload: true,
        },
    },
    levelUp: {
        src: `${baseSoundsPath}/game/level_up.mp3`,
        options: {
            volume: 0.15,
            preload: true,
        },
    },
    eat: {
        src: `${baseSoundsPath}/game/eat.mp3`,
        options: {
            volume: 0.15,
            preload: true,
        },
    },
    controlsL: {
        src: `${baseSoundsPath}/game/controls/controls_l.mp3`,
        options: {
            volume: 0.15,
            preload: true,
        },
    },
    controlsH: {
        src: `${baseSoundsPath}/game/controls/controls_h.mp3`,
        options: {
            volume: 0.15,
            preload: true,
        },
    },
};
