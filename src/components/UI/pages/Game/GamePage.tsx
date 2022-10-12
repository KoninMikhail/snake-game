import { GameTemplate } from 'components/UI/templates/Game/GameTemplate';
import { IGitHubLinkProps } from '../../molecules/links/GithubLink/GitHubLink';
import {
  COPYRIGHT_AUTHOR,
  COPYRIGHT_BUILD_YEAR,
  COPYRIGHT_LICENSE,
  GITHUB_LINK,
  GITHUB_LINK_TEXT,
} from '../../../../constants/APP';
import { ICopyrightProps } from '../../molecules/texts/Copyright/Copyright';
import useAppSelector from '../../../../hooks/useAppSelect';

export const GamePage = () => {
  const generalData = useAppSelector((state) => state.data);
  const gameData = useAppSelector((state) => state.game);

  // Footer Data
  const githubLinkData: IGitHubLinkProps = {
    uri: GITHUB_LINK,
    label: GITHUB_LINK_TEXT,
  };
  const copyrightData: ICopyrightProps = {
    author: COPYRIGHT_AUTHOR,
    creationYear: COPYRIGHT_BUILD_YEAR,
    license: COPYRIGHT_LICENSE,
  };

  return (
    <>
      <GameTemplate
        generalData={generalData}
        gameData={gameData}
        github={githubLinkData}
        copyright={copyrightData}
      />
    </>
  );
};
