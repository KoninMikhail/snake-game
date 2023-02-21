import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router-dom';
import App from '@/app/App';

const Index = lazy(() => import('./Index/IndexRoute'));
const Game = lazy(() => import('./Game/GameRoute'));
const Notfound = lazy(() => import('./NotFound/NotFoundRoute'));
const Error = lazy(() => import('./Error/ErrorRoute'));

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
