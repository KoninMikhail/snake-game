import { GridItem } from 'components/UI/extend/GridItem/GridItem';
import { Wrapper } from 'components/UI/extend/Wrapper/Wrapper';
import { StyledErrorTemplate, StyledErrorTemplateGrid } from './StyledErrorTemplate';

/**
 * @typedef IErrorTemplateProps
 *
 * @property {String} message
 */
interface IErrorTemplateProps {
  message: string;
}

/**
 * Error Template
 *
 * @description Use for Error pages (AppError, 404, etc.)
 *
 * @param {IErrorTemplateProps} props - Error template properties
 * @return {JSX.Element}
 * @constructor
 */
export const ErrorTemplate = ({ message }: IErrorTemplateProps): JSX.Element => {
  return (
    <>
      <StyledErrorTemplate>
        <Wrapper>
          <StyledErrorTemplateGrid align="center" justify="center">
            <GridItem justify="center" align="center">
              {message}
            </GridItem>
          </StyledErrorTemplateGrid>
        </Wrapper>
      </StyledErrorTemplate>
    </>
  );
};
