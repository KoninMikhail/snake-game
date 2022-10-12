import { useEffect, useRef } from 'react';
import useEventListener from './useEventListener';

const useKeyPress = (key: string, callback: (event: KeyboardEvent) => void) => {
  const callbackRef = useRef(callback);

  const handlerKeyPressEvent = (key: string, event: KeyboardEvent) => {
    console.log(event);
    if (event.key === key) {
      callbackRef.current(event);
    }
  };

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEventListener('keydown', (event: KeyboardEvent) => {
    handlerKeyPressEvent(key, event);
  });
};

export default useKeyPress;
