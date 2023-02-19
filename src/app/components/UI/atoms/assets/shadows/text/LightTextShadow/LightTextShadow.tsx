import {cloneElement} from 'react';
import {IShadow} from '@ui/atoms/assets/shadows/Shadow.interface';

/**
 * @name LightTextShadow
 *
 * Use for creating text shadow.
 *
 * @param children - a Text component to add shadow
 */
export const LightTextShadow = ({ children }: IShadow) => {
    return cloneElement(children, {
        style: {
            textShadow: '2px 2px 0 rgba(0, 0, 0, 1)',
        },
    });
};
