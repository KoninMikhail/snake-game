import { Column } from '@templates/grids/Row/Column/Column';
import { Score } from '@ui/molecules/information/Score/Score';
import { GameBoard } from '@ui/organisms/GameBoard/GameBoard';
import { Row } from '@templates/grids/Row/Row';
import { AssertPositive } from '@/types/assert-positive';
import { IGameTemplate } from '@templates/sections/Game/GameTemplate.interface';
import { LightBorder } from '@ui/atoms/assets/borders/LightBorder/LightBorder';
import { InfoBox } from '@ui/molecules/information/Infobox/InfoBox';
import { KeyboardArrowsIcon } from '@ui/atoms/assets/icons/KeyboardArrowsIcon/KeyboardArrowsIcon';
import { MaxScore } from '@ui/molecules/information/MaxScore/MaxScore';
import { TouchScreen } from '@templates/devices/screen/type/TouchScreen';
import { NonTouchScreen } from '@templates/devices/screen/type/NonTouchScreen';
import { HandIcon } from '@ui/atoms/assets/icons/HandIcon/HandIcon';

export const GameWideTemplate = <T extends AssertPositive<number>>(game: IGameTemplate<T>) => (
    <Row columns={3} style={{ height: '100%' }}>
        <Column align="center" justify={'start'}>
            <Row gap={'none'}>
                <Column justify={'start'}>
                    <Score />
                </Column>
                <Column justify={'start'}>
                    <MaxScore {...game.locale.maxScore} />
                </Column>
            </Row>
        </Column>
        <Column align="center" justify={'center'}>
            <LightBorder>
                <GameBoard localization={game.locale.modals} />
            </LightBorder>
        </Column>
        <Column align="center" justify={'end'}>
            <TouchScreen>
                <InfoBox
                    icon={<HandIcon size={'xxxl'} />}
                    message={game.locale.messages.swipeControl}
                />
            </TouchScreen>
            <NonTouchScreen>
                <InfoBox
                    icon={<KeyboardArrowsIcon size={'xxxl'} />}
                    message={game.locale.messages.keyboardControl}
                />
            </NonTouchScreen>
        </Column>
    </Row>
);
