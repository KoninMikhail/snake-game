import { ToolbarWithSoundControlAndLevelContainer } from '@templates/toolbars/ToolbarWithSoundControlAndLevel/styles/StyledToolbarWithSoundControlAndLevel';
import { Level } from '@ui/molecules/information/Level/Level';
import { SoundControl } from '@ui/organisms/SoundControl/SoundControl';
import { Row } from '@templates/grids/Row/Row';
import { Column } from '@templates/grids/Row/Column/Column';
import { IToolbarWithSoundControlAndLevel } from '@templates/toolbars/ToolbarWithSoundControlAndLevel/ToolbarWithSoundControlAndLevel.interface';

export const ToolbarWithSoundControlAndLevel = ({ level }: IToolbarWithSoundControlAndLevel) => (
    <>
        <ToolbarWithSoundControlAndLevelContainer>
            <Row columns={2} templateColumns={'repeat(2, min-content)'}>
                <Column align={'center'} justify={'start'}>
                    <Level {...level} />
                </Column>
                <Column align={'center'} justify={'end'}>
                    <SoundControl size={'xl'} />
                </Column>
            </Row>
        </ToolbarWithSoundControlAndLevelContainer>
    </>
);
