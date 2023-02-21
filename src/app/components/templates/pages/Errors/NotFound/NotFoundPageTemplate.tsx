import { BackgroundContainer } from '@templates/containers/BackgroundContainer';
import { BackgroundImage } from '@ui/atoms/images/BackgroundImage/BackgroundImage';
import { MainContainer } from '@templates/containers/MainContainer';
import { ToolbarWithSoundControlTemplate } from '@templates/toolbars/ToolbarWithSoundControl/ToolbarWithSoundControlTemplate';
import { FooterTemplate } from '@templates/footers/Footer/FooterTemplate';
import { INotFoundPageTemplate } from '@templates/pages/Errors/NotFound/NotFoundPageTemplate.interface';
import { Row } from '@templates/grids/Row/Row';
import { Column } from '@templates/grids/Row/Column/Column';
import { ExtraLargeCaption } from '@ui/atoms/typography/caption/ExtraLargeCaption/ExtraLargeCaption';
import { DesktopScreen } from '@templates/devices/screen/DesktopScreen';
import { TabletScreen } from '@templates/devices/screen/TabletScreen';
import { MobileScreen } from '@templates/devices/screen/MobileScreen';
import { Caption } from '@ui/atoms/typography/caption/Caption/Caption';
import { PrimaryButton } from '@ui/atoms/buttons/PrimaryButton/PrimaryButton';
import { LightTextShadow } from '@ui/atoms/assets/shadows/text/LightTextShadow/LightTextShadow';
import { useCustomNavigate } from '@hooks/useCustomRouter/useCustomNavigate';

export const NotFoundPageTemplate = ({
    background,
    footer,
    headline,
    buttonLabel,
}: INotFoundPageTemplate) => {
    const navigate = useCustomNavigate();

    return (
        <>
            <BackgroundContainer>
                <BackgroundImage {...background} />
            </BackgroundContainer>

            <MainContainer>
                <ToolbarWithSoundControlTemplate />
                <Row>
                    <Column align={'center'}>
                        <DesktopScreen>
                            <Row>
                                <Column>
                                    <LightTextShadow>
                                        <ExtraLargeCaption as={'h1'}>{headline}</ExtraLargeCaption>
                                    </LightTextShadow>
                                </Column>
                                <Column>
                                    <PrimaryButton onClick={() => navigate('/')}>
                                        {buttonLabel}
                                    </PrimaryButton>
                                </Column>
                            </Row>
                        </DesktopScreen>
                        <TabletScreen>
                            <Row>
                                <Column>
                                    <LightTextShadow>
                                        <ExtraLargeCaption as={'h1'}>{headline}</ExtraLargeCaption>
                                    </LightTextShadow>
                                </Column>
                                <Column>
                                    <PrimaryButton>{buttonLabel}</PrimaryButton>
                                </Column>
                            </Row>
                        </TabletScreen>
                        <MobileScreen>
                            <Row>
                                <Column justify={'center'}>
                                    <LightTextShadow>
                                        <Caption align={'center'} as={'h1'}>
                                            {headline}
                                        </Caption>
                                    </LightTextShadow>
                                </Column>
                                <Column justify={'center'}>
                                    <PrimaryButton>{buttonLabel}</PrimaryButton>
                                </Column>
                            </Row>
                        </MobileScreen>
                    </Column>
                </Row>
                <FooterTemplate {...footer} />
            </MainContainer>
        </>
    );
};
