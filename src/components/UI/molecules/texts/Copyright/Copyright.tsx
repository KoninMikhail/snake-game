import { Text } from 'components/UI/atoms/body/Text/Text';
import { TextAlign } from 'components/UI/atoms/body/TextAlign/TextAlign';
import { StyledCopyright } from './StyledCopyright';
import calculateYearsDifference from '../../../../../utils/calculateYearsDifference';
import { useMemo } from 'react';

/**
 * @typedef ICopyrightProps
 *
 * @property {('left' | 'right' | 'center')} align - allowed to align values
 * @property {String} author - Project author name
 * @property {Number} creationYear - Project creation year
 * @property {String=} licence - Project Licence
 */
export interface ICopyrightProps {
  align?: 'left' | 'right' | 'center';
  author: string;
  creationYear: number;
  license: string;
}

/**
 * Copyright
 *
 * Use for creation copyright label.
 *
 * @param {ICopyrightProps} props - Properties of copyright.
 * @returns {JSX.Element} Copyright element.
 */
export const Copyright = ({ align = 'left', author, license, creationYear }: ICopyrightProps) => {
  const projectYears = useMemo(() => {
    return calculateYearsDifference(creationYear);
  }, [creationYear]);

  return (
    <StyledCopyright>
      <TextAlign align={align}>
        <Text as="div">{`© ${projectYears}  |  ${author}. ${license + ' license.'}`}</Text>
      </TextAlign>
    </StyledCopyright>
  );
};
