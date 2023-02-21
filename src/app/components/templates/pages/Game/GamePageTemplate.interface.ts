import { IFooter } from '@templates/footers/Footer/FooterTemplate.interface';
import { IInvalidOrientationModal } from '@ui/molecules/modals/InvalidOrientationNotice/InvalidOrientationModal.interface';
import { AssertPositive } from '@/types/assert-positive';
import { IGameTemplate } from '@templates/sections/Game/GameTemplate.interface';
import { IToolbarWithSoundControlAndLevel } from '@templates/toolbars/ToolbarWithSoundControlAndLevel/ToolbarWithSoundControlAndLevel.interface';

export interface IGamePageTemplate<
    T extends AssertPositive<number>,
    K extends AssertPositive<number>
> {
    toolbar: IToolbarWithSoundControlAndLevel;
    game: IGameTemplate<T>;
    footer: IFooter;
    invalidOrientationModalMessage: IInvalidOrientationModal;
}
