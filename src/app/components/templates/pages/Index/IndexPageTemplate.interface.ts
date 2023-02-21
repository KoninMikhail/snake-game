import { IFooter } from '@templates/footers/Footer/FooterTemplate.interface';
import { IInvalidOrientationModal } from '@ui/molecules/modals/InvalidOrientationNotice/InvalidOrientationModal.interface';
import { IImage } from '@ui/atoms/images/images.interface';

export interface IIndexPageTemplate {
    background: IImage;
    launchBox: { image: IImage; message: string };
    footer: IFooter;
    invalidOrientationMessage: IInvalidOrientationModal;
}
