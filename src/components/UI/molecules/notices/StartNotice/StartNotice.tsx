import { TextAlign } from 'components/UI/atoms/body/TextAlign/TextAlign';
import BlinkAnimation from 'components/UI/atoms/assets/animations/blink-animation';
import { ExtraTextShadow } from '../../../atoms/assets/shadows/ExtraTextShadow';
import { StyledStartMessageText } from './StyledStartNotice';

interface IStartMessageProps {
  align: 'left' | 'right' | 'center';
  content: string;
}

export const StartNotice = ({ align, content }: IStartMessageProps) => (
  <BlinkAnimation duration={1200}>
    <TextAlign data-testid="text-align" align={align}>
      <ExtraTextShadow>
        <StyledStartMessageText as="span">{content}</StyledStartMessageText>
      </ExtraTextShadow>
    </TextAlign>
  </BlinkAnimation>
);
