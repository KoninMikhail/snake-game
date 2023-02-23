import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { ITextProps } from '@ui/atoms/typography/Typography.interface';

/**
 * @name Text
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it for caption.
 *
 * @param as - custom element tag
 * @param align - custom alignment
 * @param weight - custom weight
 * @returns {JSX.Element}
 */
export const HeavyCaption = styled.span<ITextProps>`
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.fontSize.caption.xxl.small};
    font-weight: ${({ weight }) => weight ?? 'normal'};

    ${({ align }) => align && `text-align: ${align};`}
    ${up('md')} {
        font-size: ${({ theme }) => theme.typography.fontSize.caption.xxl.middle};
    }

    ${up('xl')} {
        font-size: ${({ theme }) => theme.typography.fontSize.caption.xxl.large};
    }
`;
