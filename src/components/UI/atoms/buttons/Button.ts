import styled from 'styled-components';
import { font_family_body, font_size_body } from '../../../../styles/variables';

interface IButtonProps {
  children: JSX.Element | string;
  onClick: () => void;
}

export const Button = styled.button<IButtonProps>`
  align-items: center;
  background: #000;
  border: 2px solid #fff;
  font-size: ${font_size_body};
  font-family: ${font_family_body};
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-grid;
  justify-content: center;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
`;
