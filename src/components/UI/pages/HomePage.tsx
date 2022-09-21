import { HomeTemplate } from 'components/UI/templates/Home/HomeTemplate';
import {
  ACTION_TEXT,
  ACTION_TEXT_MOBILE,
  COPYRIGHT_AUTHOR,
  COPYRIGHT_BUILD_YEAR,
  COPYRIGHT_LICENSE,
  GITHUB_LINK,
  GITHUB_LINK_TEXT,
} from '../../../constants/APP';
import useDeviceTypeScreenCheck from '../../../hooks/use-device-screen-breakpoints';
import { IFooterProps } from 'components/UI/organisms/Footer/Footer';
import { IWelcomeBoxProps } from '../organisms/WelcomeBox/WelcomeBox';

export const HomePage = (): JSX.Element => {
  const { isDesktop } = useDeviceTypeScreenCheck();

  const sound = {
    sound: false,
  };

  const welcomeBoxData: IWelcomeBoxProps = {
    message: isDesktop ? ACTION_TEXT : ACTION_TEXT_MOBILE,
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

  return <HomeTemplate toolbar={sound} welcome={welcomeBoxData} footer={footerStaticData} />;
};
