import { BackgroundContainer } from '@templates/containers/BackgroundContainer';
import { BackgroundImage } from '@ui/atoms/images/BackgroundImage/BackgroundImage';
import { MainContainer } from '@templates/containers/MainContainer';
import { ToolbarWithSoundControlTemplate } from '@templates/toolbars/ToolbarWithSoundControl/ToolbarWithSoundControlTemplate';
import { LaunchSectionTemplate } from '@templates/sections/LaunchSection/LaunchSectionTemplate';
import { FooterTemplate } from '@templates/footers/Footer/FooterTemplate';
import { OrientationLandscape } from '@templates/devices/orientations/Landscape/OrientationLandscape';
import { InvalidOrientationModal } from '@ui/molecules/modals/InvalidOrientationNotice/InvalidOrientationModal';
import { IIndexPageTemplate } from '@templates/pages/Index/IndexPageTemplate.interface';
import { SmallScreen } from '@templates/devices/screen/size/SmallScreen';

export const IndexPageTemplate = ({
    launchBox,
    background,
    footer,
    invalidOrientationMessage,
}: IIndexPageTemplate) => (
    <>
        <SmallScreen>
            <OrientationLandscape>
                <InvalidOrientationModal {...invalidOrientationMessage} />
            </OrientationLandscape>
        </SmallScreen>

        <BackgroundContainer>
            <BackgroundImage {...background} />
        </BackgroundContainer>

        <MainContainer>
            <ToolbarWithSoundControlTemplate />
            <LaunchSectionTemplate
                routeAfterLaunch={'/game'}
                keyboardKeysForLaunch={['Enter']}
                {...launchBox}
            />
            <FooterTemplate {...footer} />
        </MainContainer>
    </>
);
