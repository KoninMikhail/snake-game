import { SoundControl } from '@ui/organisms/SoundControl/SoundControl';
import { ToolbarWithSoundControlContainer } from '@templates/toolbars/ToolbarWithSoundControl/styles/StyledToolbarWithSoundControl';
import { Column } from '@templates/grids/Row/Column/Column';
import { Row } from '@templates/grids/Row/Row';

export const ToolbarWithSoundControlTemplate = () => (
    <>
        <ToolbarWithSoundControlContainer>
            <Row>
                <Column align={'center'} justify={'end'}>
                    <SoundControl size={'xl'} />
                </Column>
            </Row>
        </ToolbarWithSoundControlContainer>
    </>
);
