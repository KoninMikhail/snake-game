import styled from 'styled-components';
import { ITextProps } from '@ui/atoms/typography/Typography.interface';

/**
 * @name Text
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it as text in Link components;
 *
 * @param as - custom element tag
 * @param align - custom alignment
 * @param weight - custom weight
 * @returns {JSX.Element}
 */
export const TextLink = styled.span<ITextProps>`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.body};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-weight: ${({ weight }) => weight ?? 'normal'};

    ${({ align }) => align && `text-align: ${align};`}
    &:hover {
        text-decoration: underline;
    }
`;
