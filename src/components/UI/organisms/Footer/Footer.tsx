import { Copyright, ICopyrightProps } from '../../molecules/texts/Copyright/Copyright';
import { GitHubLink, IGitHubLinkProps } from '../../molecules/links/GithubLink/GitHubLink';
import { GridItem } from '../../extend/GridItem/GridItem';
import { StyledFooterGrid } from './StyledFooterGrid';

interface IFooterProps {
  content: {
    copyright: ICopyrightProps;
    github: IGitHubLinkProps;
  };
  template: 'compact' | 'wide';
}

/**
 * Footer
 *
 * Use for footer block on template
 *
 * @param {{copyright: ICopyrightProps, github: IGitHubLinkProps}} content
 * @param {"compact" | "wide"} template
 * @return {JSX.Element}
 * @constructor
 */
export const Footer = ({ content, template }: IFooterProps) => {
  const isWideTemplate = template === 'wide';

  return (
    <StyledFooterGrid
      as="footer"
      columns={isWideTemplate ? 'repeat(2, 1fr)' : '1fr'}
      justify={isWideTemplate ? 'space-between' : 'center'}
      align="center"
    >
      <GridItem>
        <Copyright
          align={isWideTemplate ? 'left' : 'center'}
          author={content.copyright.author}
          creationYear={content.copyright.creationYear}
          license={content.copyright.license}
        />
      </GridItem>
      <GridItem justify={isWideTemplate ? 'end' : 'center'}>
        <GitHubLink uri={content.github.uri} label={content.github.label} />
      </GridItem>
    </StyledFooterGrid>
  );
};
