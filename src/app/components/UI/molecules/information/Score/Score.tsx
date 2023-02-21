import { HeavyCaption } from '@ui/atoms/typography/caption/HeavyCaption/HeavyCaption';
import padCharactersLeft from '@utils/padCharactersLeft/padCharactersLeft';
import { IScoreProps } from '@ui/molecules/information/Score/Score.interface';
import useAppSelector from '@hooks/useAppSelector/useAppSelector';
import { gameScoreSelector } from '@store/slices/game.slice';

/**
 * @name Score
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it for display count engine score;
 *
 * @param align - text alignment
 */
export const Score = ({ align = 'left' }: IScoreProps) => {
    const score = useAppSelector(gameScoreSelector);
    const outputScore = padCharactersLeft(score, 6);
    return <HeavyCaption align={align}>{outputScore}</HeavyCaption>;
};
