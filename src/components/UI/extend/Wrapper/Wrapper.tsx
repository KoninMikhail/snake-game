import { StyledWrapper } from './StyledWrapper';
import { ReactElement, ReactNode } from 'react';

interface IWrapperProps {
  children: ReactElement | ReactNode | JSX.Element | JSX.Element[];
}

/**
 * Wrapper
 *
 * Use for wrapping elements inside
 *
 * @returns {JSX.Element}
 */

export const Wrapper = ({ children }: IWrapperProps): JSX.Element => (
  <>
    <StyledWrapper>{children}</StyledWrapper>
  </>
);
