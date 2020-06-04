import { lazy } from 'react';

const HomeView = lazy(() => import(/* webpackChunkName: "home-view" */'../views/HomeView'));

const appRouter = [
    {
        path: '/',
        component: HomeView,
        name: 'Home',
        icon: '',
        exact: true
    }
]

export default appRouter;