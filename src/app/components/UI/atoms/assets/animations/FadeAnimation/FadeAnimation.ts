import styled, { keyframes } from 'styled-components';
import { IAnimationPropsWithDirection } from '@ui/atoms/assets/animations/Animation.interface';

const FadeAnimationKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

/**
 * @name FadeAnimation
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for creation fade-in or fade-out effect
 *
 * @param delayBeforeChange - delayBeforeChange before animation
 * @param direction - animation direction
 * @return {JSX.Element}
 */
export const FadeAnimation = styled.div<IAnimationPropsWithDirection>`
    width: inherit;
    height: inherit;
    animation-duration: ${({ theme }) => theme.animations.fade.duration.toString() + 'ms'};
    animation-fill-mode: ${({ theme }) => theme.animations.fade.fill};
    animation-name: ${FadeAnimationKeyframes};
    animation-direction: ${({ direction }) => (direction === 'in' ? 'normal' : 'reverse')};
    animation-delay: ${({ delay = 0 }) => delay.toFixed().toString() + 'ms'};
    animation-iteration-count: ${({ theme }) => theme.animations.fade.count};
    animation-timing-function: ${({ theme }) => theme.animations.fade.timing};
`;
