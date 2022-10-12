import styled, { keyframes } from 'styled-components';

interface IFadeAnimationProps {
  direction: string;
  duration?: number;
  delay?: number;
  count?: string;
}

const FadeInAnimationKeyFrames = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const FadeOutAnimationKeyFrames = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const FadeAnimation = styled.div<IFadeAnimationProps>`
  animation-duration: ${(props) => props?.duration?.toString() + 'ms' || '600ms'};
  animation-fill-mode: forwards;
  animation-delay: ${(props) => (props.delay ? props.delay.toString() + 'ms' : '0')};
  animation-iteration-count: ${(props) => props.count || '1'};
  animation-name: ${(props) =>
    props.direction === 'in' ? FadeInAnimationKeyFrames : FadeOutAnimationKeyFrames};
  animation-timing-function: ease-in-out;
`;

export default FadeAnimation;
