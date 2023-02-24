import { BackgroundContainer } from '@templates/containers/BackgroundContainer';
import { BackgroundImage } from '@ui/atoms/images/BackgroundImage/BackgroundImage';
import { MainContainer } from '@templates/containers/MainContainer';
import { ToolbarWithSoundControlTemplate } from '@templates/toolbars/ToolbarWithSoundControl/ToolbarWithSoundControlTemplate';
import { FooterTemplate } from '@templates/footers/Footer/FooterTemplate';
import { INotFoundPageTemplate } from '@templates/pages/Errors/NotFound/NotFoundPageTemplate.interface';
import { Row } from '@templates/grids/Row/Row';
import { Column } from '@templates/grids/Row/Column/Column';
import { ExtraLargeCaption } from '@ui/atoms/typography/caption/ExtraLargeCaption/ExtraLargeCaption';
import { LargeScreen } from '@templates/devices/screen/size/LargeScreen';
import { MiddleScreen } from '@templates/devices/screen/size/MiddleScreen';
import { SmallScreen } from '@templates/devices/screen/size/SmallScreen';
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
                        <LargeScreen>
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
                        </LargeScreen>

                        <MiddleScreen>
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
                        </MiddleScreen>

                        <SmallScreen>
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
                        </SmallScreen>
                    </Column>
                </Row>
                <FooterTemplate {...footer} />
            </MainContainer>
        </>
    );
};
