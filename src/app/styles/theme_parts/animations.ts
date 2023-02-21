/**
 * @typedef ThemeAnimationItem
 */
import { PAGE_TRANSITION_DURATION } from '@constants/APP';

type ThemeAnimationItem = {
    duration: number;
    count: number | 'infinite';
    timing: string;
    fill: 'none' | 'forwards' | 'backwards' | 'both';
};

export type ThemeAnimations = {
    blink: ThemeAnimationItem;
    fade: ThemeAnimationItem;
};

/**
 * The list of CSS animations params;
 */
export const animations: ThemeAnimations = {
    blink: {
        duration: PAGE_TRANSITION_DURATION,
        count: 'infinite',
        timing: 'step-start',
        fill: 'forwards',
    },
    fade: {
        duration: PAGE_TRANSITION_DURATION,
        count: 1,
        timing: 'fade',
        fill: 'forwards',
    },
};
