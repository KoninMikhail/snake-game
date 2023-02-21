import styled from 'styled-components';
import {up} from 'styled-breakpoints';
import {ITextProps} from '@ui/atoms/typography/Typography.interface';

/**
 * @name Text
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it for body text
 *
 * @param as - custom element tag
 * @param align - custom alignment
 * @param weight - custom weight
 * @returns {JSX.Element}
 */
export const Text = styled.span<ITextProps>`
    color: ${({ theme }) => theme.colors.body};
    font-size: ${({ theme }) => theme.typography.fontSize.body.mobile};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-weight: ${({ weight }) => weight ?? 'normal'};

    ${({ align }) => align && `text-align: ${align};`}
    ${up('md')} {
        font-size: ${({ theme }) => theme.typography.fontSize.body.tablet};
    }

    ${up('xl')} {
        font-size: ${({ theme }) => theme.typography.fontSize.body.desktop};
    }
`;
