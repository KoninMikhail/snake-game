import { Copyright } from '../../molecules/Copyright/Copyright';
import { GitHubLink, IGitHubLinkProps } from '../../molecules/GithubLink/GitHubLink';
import { GridItem } from '../../extend/GridItem/GridItem';
import { gap } from '../../../../styles/variables';
import useDeviceTypeScreenCheck from '../../../../hooks/use-device-screen-breakpoints';
import { StyledFooter, StyledFooterGrid } from './StyledFooterGrid';

export interface IFooterProps {
  copyright: {
    author: string;
    creationYear: number;
    license?: string;
  };
  github: IGitHubLinkProps;
}

export const Footer = ({ copyright, github }: IFooterProps): JSX.Element => {
  const { isTablet } = useDeviceTypeScreenCheck();

  return (
    <StyledFooter>
      <StyledFooterGrid
        as="footer"
        columns={isTablet ? 'repeat(2, 1fr)' : '1fr'}
        justify={isTablet ? 'space-between' : 'center'}
        gap={gap}
        align="center"
      >
        <GridItem>
          <Copyright
            align={isTablet ? 'left' : 'center'}
            author={copyright.author}
            creationYear={copyright.creationYear}
            license={copyright.license}
          />
        </GridItem>
        <GridItem justify={isTablet ? 'end' : 'center'}>
          <GitHubLink uri={github.uri} label={github.label} />
        </GridItem>
      </StyledFooterGrid>
    </StyledFooter>
  );
};
