import { Row } from '@templates/grids/Row/Row';
import { Column } from '@templates/grids/Row/Column/Column';
import { Score } from '@ui/molecules/information/Score/Score';
import { GameBoard } from '@ui/organisms/GameBoard/GameBoard';
import { AssertPositive } from '@/types/assert-positive';
import { IGameTemplate } from '@templates/sections/Game/GameTemplate.interface';
import { LightBorder } from '@ui/atoms/assets/borders/LightBorder/LightBorder';
import { MaxScore } from '@ui/molecules/information/MaxScore/MaxScore';

export const GameCenteredTemplate = <T extends AssertPositive<number>>(game: IGameTemplate<T>) => (
    <Row columns={1} templateColumns={'max-content auto max-content'} style={{ height: '100%' }}>
        <Column align="center" justify={'center'}>
            <Row>
                <Column align="center" justify={'center'}>
                    <Row gap={'none'}>
                        <Column justify={'center'}>
                            <Score />
                        </Column>
                        <Column justify={'center'}>
                            <MaxScore {...game.locale.maxScore} />
                        </Column>
                    </Row>
                </Column>
                <Column align="center" justify={'center'}>
                    <LightBorder>
                        <GameBoard localization={game.locale.modals} />
                    </LightBorder>
                </Column>
                <Column align="center" justify={'center'}>
                    {game.locale.messages.swipeControl}
                </Column>
            </Row>
        </Column>
    </Row>
);
