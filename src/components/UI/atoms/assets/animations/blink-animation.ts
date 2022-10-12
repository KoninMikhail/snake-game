import styled, { keyframes } from 'styled-components';

interface IBlinkAnimationProps {
  duration?: number;
  delay?: number;
  count?: string;
}

const blinkAnimationKeyframes = keyframes`
  50% {
    opacity: 0.0;
  }
`;

const BlinkAnimation = styled.div<IBlinkAnimationProps>`
  animation-duration: ${(props) => props?.duration?.toString() + 'ms' || '600ms'};
  animation-fill-mode: forwards;
  animation-delay: ${(props) => (props.delay ? props.delay.toString() + 'ms' : '0')};
  animation-iteration-count: ${(props) => props.count || 'infinite'};
  animation-name: ${blinkAnimationKeyframes};
  animation-timing-function: step-start;
`;

export default BlinkAnimation;
