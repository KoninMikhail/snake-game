import { GridItem } from 'components/UI/extend/GridItem/GridItem';
import { ExternalLink } from 'components/UI/atoms/body/ExternalLink/ExternalLink';
import { Text } from 'components/UI/atoms/body/Text/Text';
import { ExternalBorder } from 'components/UI/atoms/assets/borders/ExternalBorder';
import { ExtraShadow } from 'components/UI/atoms/assets/shadows/ExtraShadow';

import { StyledGithubLinkGrid, StyledGitHubIcon } from './StyledGithubLinkGrid';

/**
 * @typedef IGitHubLinkProps
 *
 * @property {String} uri - GitHub URI of the resource being
 * @property {String} label - Link label
 */
export interface IGitHubLinkProps {
  uri: string;
  label: string;
}

/**
 * GitHubLink
 *
 * Use for GitHub link on page
 *
 * @param {IGitHubLinkProps} props - component props
 * @returns {JSX.Element}
 */
export const GitHubLink = ({ uri, label }: IGitHubLinkProps) => {
  return (
    <ExternalLink href={uri}>
      <ExtraShadow>
        <ExternalBorder>
          <StyledGithubLinkGrid columns="auto max-content" gap={'1rem'} align="center">
            <GridItem align="center">
              <Text as="span">{label}</Text>
            </GridItem>
            <GridItem align="center">
              <StyledGitHubIcon />
            </GridItem>
          </StyledGithubLinkGrid>
        </ExternalBorder>
      </ExtraShadow>
    </ExternalLink>
  );
};
