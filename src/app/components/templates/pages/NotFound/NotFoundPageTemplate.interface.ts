import { IFooter } from '@templates/footers/Footer/FooterTemplate.interface';
import { IImage } from '@ui/atoms/images/images.interface';

export interface INotFoundPageTemplate {
    background: IImage;
    headline: string;
    buttonLabel: string;
    footer: IFooter;
}
