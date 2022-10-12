import styled from 'styled-components';
import { IExternalLinkProps } from './ExternalLink';

export const StyledExternalLink = styled.a.attrs((props) => ({
  href: props.href || '#',
  target: props.target || '_blank',
  rel: props.rel || 'noopener noreferrer',
  children: props.children || 'link',
}))<IExternalLinkProps>`
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease-out;

  &:hover {
    text-decoration: underline;
  }
`;
