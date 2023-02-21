//
// Animation props
// ----------------------------------------------------------------------

export interface IAnimationProps {
    /* Delay before animation start */
    delay?: number;
}

export interface IAnimationPropsWithDirection extends IAnimationProps {
    /* Direction for animation playing */
    direction?: 'in' | 'out';
}
