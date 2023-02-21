import {PrimaryBorder} from '@ui/atoms/assets/borders/PrimaryBorder/PrimaryBorder';
import {ExtraShadow} from '@ui/atoms/assets/shadows/blocks/ExtraShadow/ExtraShadow';
import {StyledGithubLink} from './style/StyledGithubLink';
import {GitHubIcon} from '@ui/atoms/assets/icons/GithubIcon/GitHubIcon';
import {ExternalLink} from '@ui/atoms/navigation/ExternalLink/ExternalLink';
import {TextLink} from '@ui/atoms/typography/link/TextLink';
import {IGitHubLinkProps} from '@ui/molecules/navigation/GithubLink/GitHubLink.interface';

/**
 * GitHubLink
 *
 * Use it for GitHub link state page
 *
 * @param uri - uri to your repository
 * @param label - label for button
 */
export const GitHubLink = ({ uri, label }: IGitHubLinkProps) => (
    <ExternalLink href={uri}>
        <ExtraShadow>
            <PrimaryBorder>
                <StyledGithubLink>
                    <TextLink>{label}</TextLink>
                    <GitHubIcon size={'lg'} />
                </StyledGithubLink>
            </PrimaryBorder>
        </ExtraShadow>
    </ExternalLink>
);
