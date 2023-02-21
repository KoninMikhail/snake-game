import styled from 'styled-components';
import {IExternalLinkProps} from '@ui/atoms/navigation/ExternalLink/ExternalLink.interface';

/**
 * @name ExternalLinkProps
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for external links
 *
 * @param href
 * @param target
 * @param rel
 * @returns {JSX.Element}
 */
export const ExternalLink = styled.a.attrs<IExternalLinkProps>((props) => ({
    href: props.href ?? 'https://google.com',
    target: props.target ?? '_blank',
    rel: props.rel ?? 'noopener noreferrer',
}))`
    cursor: pointer;
    text-decoration: none;
    color: white;

    &:hover {
        text-decoration: underline;
    }
`;
