import {useCountdown} from 'usehooks-ts';
import {
    StyledCountdownModal,
    StyledCountdownModalContent,
} from '@ui/molecules/modals/CountdownModal/style/StyledCountdownModal';
import {useEffect} from 'react';
import {HeavyCaption} from '@ui/atoms/typography/caption/HeavyCaption/HeavyCaption';
import {Text} from '@ui/atoms/typography/body/Text/Text';
import {ICountdownModal} from '@ui/molecules/modals/CountdownModal/CountdownModalProps.interface';

/**
 * @name CountdownModal
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use to ready a message about incorrect screen orientation.
 *
 * @param isShow - showing state
 * @param countStart - count from number
 * @param onCountdownEnd - callback
 * @returns {JSX.Element}
 */
export const CountdownModal = <T extends number>({
    visible,
    message,
    countStart,
    onCountdownEnd,
}: ICountdownModal<T>) => {
    const [count, { startCountdown, resetCountdown }] = useCountdown({
        countStart,
        intervalMs: 1000,
    });

    useEffect(() => {
        if (visible) {
            startCountdown();
        }
        if (count === 0) {
            onCountdownEnd && onCountdownEnd();
            resetCountdown();
        }
    }, [count, onCountdownEnd, resetCountdown, startCountdown, visible]);

    return (
        <>
            <StyledCountdownModal>
                <StyledCountdownModalContent>
                    <HeavyCaption align={'center'}>{count}</HeavyCaption>
                    <Text align={'center'}>{message}</Text>
                </StyledCountdownModalContent>
            </StyledCountdownModal>
        </>
    );
};
