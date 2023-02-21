import {Caption} from '@ui/atoms/typography/caption/Caption/Caption';
import {IMaxScore} from '@ui/molecules/information/MaxScore/MaxScore.interface';

/**
 * @name MaxScore
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it for display count engine score;
 *
 * @param value - score from engine
 * @param label - label text
 * @param align - text alignment
 * @return {JSX.Element}
 */
export const MaxScore = <T extends number>({ value, label, align = 'left' }: IMaxScore<T>) => (
    <Caption align={align}>{label + ' ' + value}</Caption>
);
