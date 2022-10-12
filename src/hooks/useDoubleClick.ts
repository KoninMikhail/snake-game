import { useRef } from 'react';
import useEventListener from './useEventListener';

type DoubleClickType = {
  doubleClick: (event: MouseEvent) => void;
  timeout: number;
};

export const useDoubleClick = ({ doubleClick, timeout = 200 }: DoubleClickType) => {
  const clickTimeout = useRef<number>();

  const clearClickTimeout = (): void => {
    if (clickTimeout) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = undefined;
    }
  };

  const handlerClick = (event: MouseEvent): void => {
    clearClickTimeout();

    if (event.detail % 2 === 0) {
      clickTimeout.current = setTimeout(() => {
        doubleClick(event);
      }, timeout);
    }
  };

  useEventListener('click', handlerClick);
};
