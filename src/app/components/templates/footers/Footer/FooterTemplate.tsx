import { FooterSingleColumnTemplate } from '@templates/footers/Footer/variants/FooterSingleColumnTemplate';
import { FooterDoubleColumnsTemplate } from '@templates/footers/Footer/variants/FooterDoubleColumnsTemplate';
import { FooterContainer } from '@templates/footers/Footer/styles/StyledFooter';
import { IFooter } from '@templates/footers/Footer/FooterTemplate.interface';
import { MobileScreen } from '@templates/devices/screen/MobileScreen';
import { TabletScreen } from '@templates/devices/screen/TabletScreen';
import { DesktopScreen } from '@templates/devices/screen/DesktopScreen';

export const FooterTemplate = (props: IFooter) => (
    <FooterContainer>
        <MobileScreen>
            <FooterSingleColumnTemplate {...props} />
        </MobileScreen>

        <TabletScreen>
            <FooterDoubleColumnsTemplate {...props} />
        </TabletScreen>

        <DesktopScreen>
            <FooterDoubleColumnsTemplate {...props} />
        </DesktopScreen>
    </FooterContainer>
);
