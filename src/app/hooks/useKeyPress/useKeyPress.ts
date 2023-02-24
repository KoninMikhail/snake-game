import { useEventListener } from 'usehooks-ts';

/**
 * @name useKeyPress
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use it for bind callbacks on key press
 *
 * It takes an array of keys and a callback function, and calls the callback function whenever any of
 * the keys are pressed
 *
 * @param keys - An array of keys that we want to listen for.
 * @param callback - (event: KeyboardEvent) => void
 */
const useKeyPress = <K>(keys: K[], callback: (event: KeyboardEvent) => void): void => {
    const handleEvent = (event: KeyboardEvent) => {
        if (keys.some((key) => event.key === key)) {
            callback(event);
        }
    };

    useEventListener('keydown', handleEvent);
};

export default useKeyPress;
