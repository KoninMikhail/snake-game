import styled from 'styled-components';
import { Grid } from '../../extend/Grid/Grid';
import { font_color } from 'styles/variables';
import { ReactComponent as GitHubIcon } from 'assets/icons/gitgub_icon.svg';
import { up } from 'styled-breakpoints';

export const StyledGithubLinkGrid = styled(Grid)`
  padding: 0.8rem 0.8rem 0.8rem;
  background: black;

  ${up('xl')} {
    padding: 0.8vw 0.8vw 0.8vw;
  }
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
  fill: ${font_color};
  padding-top: 3px;

  ${up('xl')} {
    width: 1.5em;
    height: 1.5em;
  }
`;
