import useKeyPress from '@hooks/useKeyPress/useKeyPress';
import {IKeyboardArrows} from '@hooks/useKeyboardArrows/useKeyboardArrows.interface';

/**
 * @name useKeyboardArrows
 * @version 1.0.0
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for keyboard arrows control
 *
 * @param onArrowUp - Called after press ArrowUp
 * @param onArrowLeft  - Called after press ArrowLeft
 * @param onArrowDown  - Called after press ArrowDown
 * @param onArrowRight  - Called after press ArrowRight
 * @see {@link useKeyPress}
 */
const useKeyboardArrows = ({
    onArrowUp,
    onArrowLeft,
    onArrowDown,
    onArrowRight,
}: IKeyboardArrows) => {
    useKeyPress(['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'], (event) => {
        switch (event.code) {
            case 'ArrowUp':
                event.preventDefault();
                onArrowUp && onArrowUp();
                break;
            case 'ArrowDown':
                event.preventDefault();
                onArrowDown && onArrowDown();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                onArrowLeft && onArrowLeft();
                break;
            case 'ArrowRight':
                event.preventDefault();
                onArrowRight && onArrowRight();
                break;
        }
    });
};

export default useKeyboardArrows;
