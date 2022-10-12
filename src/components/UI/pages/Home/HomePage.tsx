import { useNavigate } from 'react-router-dom';
import { HomeTemplate } from 'components/UI/templates/Home/HomeTemplate';
import useKeyPress from '../../../../hooks/useKeyPress';
import { useDoubleClick } from '../../../../hooks/useDoubleClick';
import useDeviceScreenSize from '../../../../hooks/useDeviceScreenSize';
import {
  ACTION_TEXT,
  ACTION_TEXT_DESKTOP,
  COPYRIGHT_AUTHOR,
  COPYRIGHT_BUILD_YEAR,
  COPYRIGHT_LICENSE,
  GITHUB_LINK,
  GITHUB_LINK_TEXT,
} from '../../../../constants/APP';
import { IGitHubLinkProps } from '../../molecules/links/GithubLink/GitHubLink';
import { ICopyrightProps } from '../../molecules/texts/Copyright/Copyright';
import useAppSelector from '../../../../hooks/useAppSelect';

/**
 * Home page
 * @return {JSX.Element}
 * @constructor
 */
export const HomePage = () => {
  const navigate = useNavigate();
  const sound = useAppSelector((state) => state.data.sound);
  const { isDesktop } = useDeviceScreenSize();

  // Data
  const callToActionMessage = isDesktop ? ACTION_TEXT_DESKTOP : ACTION_TEXT;
  const githubLinkData: IGitHubLinkProps = {
    uri: GITHUB_LINK,
    label: GITHUB_LINK_TEXT,
  };
  const copyrightData: ICopyrightProps = {
    author: COPYRIGHT_AUTHOR,
    creationYear: COPYRIGHT_BUILD_YEAR,
    license: COPYRIGHT_LICENSE,
  };

  // Action handler
  const gotoGameScreen = () => navigate('game');

  // Actions
  useKeyPress('Enter', gotoGameScreen);

  useDoubleClick(() => !isDesktop && gotoGameScreen());

  return (
    <>
      <HomeTemplate
        sound={sound}
        message={callToActionMessage}
        github={githubLinkData}
        copyright={copyrightData}
      />
    </>
  );
};
