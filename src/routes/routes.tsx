import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router-dom';
import App from 'App';

const Index = lazy(() => import('./Index/Index'));
const Game = lazy(() => import('./Game/Game'));
const Notfound = lazy(() => import('./404/404'));
const Error = lazy(() => import('./Error/Error'));

const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <App />,
    errorElement: (
      <Suspense>
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Index />
          </Suspense>
        ),
      },
      {
        path: 'game',
        element: (
          <Suspense>
            <Game />
          </Suspense>
        ),
      },

      {
        path: '*',
        element: (
          <Suspense>
            <Notfound />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
