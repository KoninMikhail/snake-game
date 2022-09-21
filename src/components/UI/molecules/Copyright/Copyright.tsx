import { Text } from 'components/UI/atoms/body/Text/Text';
import { TextAlign } from 'components/UI/atoms/body/TextAlign/TextAlign';
import { StyledCopyright } from './StyledCopyright';

/**
 * @typedef ICopyrightProps
 *
 * @property {('left' | 'right' | 'center')} align - allowed to align values
 * @property {String} author - Project author name
 * @property {Number} creationYear - Project creation year
 * @property {String=} licence - Project Licence
 */

interface ICopyrightProps {
  align: 'left' | 'right' | 'center';
  author: string;
  creationYear: number;
  license?: string;
}

/**
 * Copyright
 *
 * @description Use for creation copyright label.
 *
 * @param {ICopyrightProps} props - Properties of copyright.
 * @returns {JSX.Element} Copyright element.
 */

export const Copyright = (props: ICopyrightProps): JSX.Element => {
  return (
    <StyledCopyright>
      <TextAlign align={props.align}>
        <Text as="div">{`© ${renderCopyrightDates(props.creationYear)}  |  ${
          props.author
        }. ${renderCopyrightLicenseText(props.license)}`}</Text>
      </TextAlign>
    </StyledCopyright>
  );
};

/**
 * renderCopyrightDates
 *
 * @description Use this function to generate dates in footer copyright template.
 *
 * @memberOf Copyright
 * @param {Number} startYear - project start year
 * @returns {String} - project dates string
 */

function renderCopyrightDates(startYear: number): string {
  const currentYear = new Date().getFullYear();

  if (startYear < currentYear) {
    return `${startYear}-${currentYear}`;
  }

  return currentYear.toString();
}

/**
 * renderCopyrightLicenseText
 *
 * @description Use for Render copyright license label.
 *
 * @memberOf Copyright
 * @param {string} licenseName - e.g. MIT, GPLv2 and etc.
 * @returns {string}
 */

function renderCopyrightLicenseText(licenseName?: string): string {
  return licenseName && licenseName.length > 0 ? licenseName + ' license.' : '';
}
