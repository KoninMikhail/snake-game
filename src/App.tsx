import React, { Fragment, useEffect, useState } from 'react';
import { ScrollRestoration, useLocation, useOutlet } from 'react-router-dom';
import { FontStyles } from 'styles/fonts';
import { GlobalStyles } from 'styles/globals';
import { PAGE_TRANSITION_DURATION_MS } from './constants/APP';
import FadeAnimation from 'components/UI/atoms/assets/animations/fade-animation';

export default function App() {
  const { pathname } = useLocation();
  const outlet = useOutlet();

  // Changing page transition states
  const [currentOutlet, setCurrentOutlet] = useState<React.ReactElement | null>(null);
  const [isRouting, setIsRouting] = useState<boolean>(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsRouting(false);

    const timeout = setTimeout(() => {
      setCurrentOutlet(outlet);
      setIsRouting(true);
      clearTimeout(timeout);
    }, PAGE_TRANSITION_DURATION_MS);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Fragment>
      <GlobalStyles />
      <FontStyles />
      <FadeAnimation
        direction={isRouting ? 'in' : 'out'}
        duration={PAGE_TRANSITION_DURATION_MS}
        style={{ width: 'inherit', height: 'inherit' }}
      >
        {currentOutlet}
      </FadeAnimation>
      <ScrollRestoration />
    </Fragment>
  );
}
