import { Link } from 'react-router-dom';
import { StyledCloseIcon } from './StyledBackHomeLink';

export const BackHomeLink = () => {
  return (
    <>
      <Link to="/">
        <StyledCloseIcon />
      </Link>
    </>
  );
};
