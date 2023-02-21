import styled, { keyframes } from 'styled-components';
import { IAnimationProps } from '@ui/atoms/assets/animations/Animation.interface';

const blinkAnimationKeyframes = keyframes`
  50% {
    opacity: 0.0;
  }
`;

/**
 * @name BlinkAnimation
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for creation blink-effect.
 *
 * @param delayBeforeChange - animation delayBeforeChange
 * @return {JSX.Element}
 */
export const BlinkAnimation = styled.div<IAnimationProps>`
    animation-duration: ${({ theme }) => theme.animations.blink.duration.toString() + 'ms'};
    animation-fill-mode: ${({ theme }) => theme.animations.blink.fill};
    animation-direction: normal;
    animation-name: ${blinkAnimationKeyframes};
    animation-delay: ${({ delay = 0 }) => delay.toFixed().toString() + 'ms'};
    animation-iteration-count: ${({ theme }) => theme.animations.blink.count};
    animation-timing-function: ${({ theme }) => theme.animations.blink.timing};
`;
