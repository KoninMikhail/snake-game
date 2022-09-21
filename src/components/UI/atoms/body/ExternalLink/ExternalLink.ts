import styled from 'styled-components';

/**
 * @typedef IExternalLinkProps
 *
 * @property {string} href - The href of the external link
 * @property {string=} - target - The target of the external link
 * @property {string=} - rel - The rel of the external link
 * @property {JSX.Element=} - children - The children of the external link.
 */
interface IExternalLinkProps {
  href: string;
  target?: string;
  children?: JSX.Element | JSX.Element[];
  rel?: string;
}

/**
 * ExternalLink
 *
 * @description Use for external links with <a> tags
 *
 * @param {IExternalLinkProps} props - Properties
 * @returns {JSX.Element} External link element.
 */

export const ExternalLink = styled.a.attrs<IExternalLinkProps>((props) => ({
  href: props.href || '#',
  target: props.target || '_blank',
  rel: props.rel || 'noopener noreferrer',
}))`
  color: white;
  text-decoration: none;
  transition: all 0.3s ease-out;

  &:hover {
    text-decoration: underline;
  }
`;
