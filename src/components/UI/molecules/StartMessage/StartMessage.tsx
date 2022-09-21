import { TextAlign } from 'components/UI/atoms/body/TextAlign/TextAlign';
import BlinkAnimation from 'assets/animations/blink-animation';
import { ExtraTextShadow } from '../../../../assets/shadows/ExtraTextShadow';
import { StyledStartMessageText } from './StyledStartMessage';

interface IStartMessageProps {
  align: 'left' | 'right' | 'center';
  content: string;
}

export const StartMessage = ({ align, content }: IStartMessageProps): JSX.Element => (
  <>
    <BlinkAnimation duration={1200}>
      <TextAlign align={align}>
        <ExtraTextShadow>
          <StyledStartMessageText as="span">{content}</StyledStartMessageText>
        </ExtraTextShadow>
      </TextAlign>
    </BlinkAnimation>
  </>
);
