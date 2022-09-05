import { Provider } from 'react-redux';
import { Fragment } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { FontStyles } from './styles/fonts';
import { GlobalStyles } from 'styles/globals';

import store from './store';

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyles />
        <FontStyles />
        <Outlet />
        <ScrollRestoration />
      </Provider>
    </Fragment>
  );
}
