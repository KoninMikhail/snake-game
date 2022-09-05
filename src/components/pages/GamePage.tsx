import { GameTemplate } from 'components/templates/Game/GameTemplate';
import {
  COPYRIGHT_AUTHOR,
  COPYRIGHT_BUILD_YEAR,
  COPYRIGHT_LICENSE,
  GITHUB_LINK,
  GITHUB_LINK_TEXT,
} from '../../constants/APP';
import { IFooterProps } from 'components/organisms/Footer/Footer';

export const GamePage = (): JSX.Element => {
  const sound = {
    sound: false,
  };

  const game = {
    score: 15,
    maxScore: 35,
  };

  const footerStaticData: IFooterProps = {
    copyright: {
      author: COPYRIGHT_AUTHOR,
      creationYear: COPYRIGHT_BUILD_YEAR,
      license: COPYRIGHT_LICENSE,
    },
    github: {
      uri: GITHUB_LINK,
      label: GITHUB_LINK_TEXT,
    },
  };

  return <GameTemplate toolbar={sound} game={game} footer={footerStaticData} />;
};
