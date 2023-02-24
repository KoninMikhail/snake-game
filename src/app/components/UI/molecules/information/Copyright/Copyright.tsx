import { Text } from '@ui/atoms/typography/body/Text/Text';
import { StyledCopyright } from './style/StyledCopyright';
import { ICopyrightProps } from './Copyright.interface';
import { getYearRange } from './utils/Copyright.utils';
import { useMemo } from 'react';

/**
 * @name Copyright
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for creation copyright text.
 *
 * @param author
 * @param creationYear - If the year of creation is the same as the current year component
 * will return single number in a text else {creation-year} - {current year}
 * @param licence
 * @returns {JSX.Element}
 */
export const Copyright = ({ author, creationYear, license, ...rest }: ICopyrightProps) => {
    const projectYears = useMemo(() => getYearRange(creationYear), [creationYear]);
    return (
        <StyledCopyright {...rest}>
            <Text>{`© ${projectYears}  |  ${author}. ${license}.`}</Text>
        </StyledCopyright>
    );
};
