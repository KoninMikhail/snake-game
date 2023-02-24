import { FooterSingleColumnTemplate } from '@templates/footers/Footer/variants/FooterSingleColumnTemplate';
import { FooterDoubleColumnsTemplate } from '@templates/footers/Footer/variants/FooterDoubleColumnsTemplate';
import { FooterContainer } from '@templates/footers/Footer/styles/StyledFooter';
import { IFooter } from '@templates/footers/Footer/FooterTemplate.interface';
import { SmallScreen } from '@templates/devices/screen/size/SmallScreen';
import { MiddleScreen } from '@templates/devices/screen/size/MiddleScreen';
import { LargeScreen } from '@templates/devices/screen/size/LargeScreen';

export const FooterTemplate = (props: IFooter) => (
    <FooterContainer>
        <SmallScreen>
            <FooterSingleColumnTemplate {...props} />
        </SmallScreen>

        <MiddleScreen>
            <FooterDoubleColumnsTemplate {...props} />
        </MiddleScreen>

        <LargeScreen>
            <FooterDoubleColumnsTemplate {...props} />
        </LargeScreen>
    </FooterContainer>
);
