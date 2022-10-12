import { StyledExternalLink } from './StyledExternalLink';

/**
 * @typedef IExternalLinkProps
 *
 * @property {string} href - The href of the external link
 * @property {string=} - target - The target of the external link
 * @property {string=} - rel - The rel of the external link
 * @property {JSX.Element=} - children - The children of the external link.
 */
export interface IExternalLinkProps {
  href?: string;
  target?: string;
  children?: JSX.Element | JSX.Element[] | string;
  rel?: string;
}

/**
 * ExternalLink
 *
 * Use for external links with <a> tags
 *
 * @param {IExternalLinkProps} props - Properties
 * @returns {JSX.Element} External link element.
 */

export const ExternalLink = ({ children, ...rest }: IExternalLinkProps): JSX.Element => (
  <StyledExternalLink {...rest}>{children}</StyledExternalLink>
);
