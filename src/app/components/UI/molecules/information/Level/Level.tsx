import {
    StyledLevel,
    StyledLevelCounter,
    StyledLevelLabel,
} from '@ui/molecules/information/Level/style/StyledLevel';
import { Text } from '@ui/atoms/typography/body/Text/Text';
import { ExtraLargeCaption } from '@ui/atoms/typography/caption/ExtraLargeCaption/ExtraLargeCaption';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { gameLevelSelector } from '@store/slices/game.slice';
import { ILevel } from '@ui/molecules/information/Level/Level.interface';

/**
 * @name Level
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for display showLevel;
 */
export const Level = ({ upText, downText }: ILevel) => {
    const currentLevel = useAppSelector(gameLevelSelector);
    return (
        <>
            <StyledLevel>
                <StyledLevelCounter>
                    <ExtraLargeCaption>{currentLevel}</ExtraLargeCaption>
                </StyledLevelCounter>
                <StyledLevelLabel>
                    <Text>{upText}</Text>
                    <Text>{downText}</Text>
                </StyledLevelLabel>
            </StyledLevel>
        </>
    );
};
