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
export const ExtraLargeCaption = styled.span<ITextProps>`
    font-size: ${({ theme }) => theme.typography.fontSize.caption.xl.small};
    font-weight: ${({ weight }) => weight ?? 'normal'};

    ${({ align }) => align && `text-align: ${align};`}
    ${up('md')} {
        font-size: ${({ theme }) => theme.typography.fontSize.caption.xl.middle};
    }

    ${up('xl')} {
        font-size: ${({ theme }) => theme.typography.fontSize.caption.xl.large};
    }
`;
