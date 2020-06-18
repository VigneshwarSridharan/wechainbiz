import { lazy } from 'react';

const HomeView = lazy(() => import(/* webpackChunkName: "home-view" */'../views/HomeView'));
const OurProducts = lazy(() => import(/* webpackChunkName: "our-products" */'../views/OurProducts'));
const AboutUs = lazy(() => import(/* webpackChunkName: "about-us" */'../views/AboutUs'));
const Enquiries = lazy(() => import(/* webpackChunkName: "enquiries" */'../views/Enquiries'));

const NewLoanApplication = lazy(() => import(/* webpackChunkName: "new-loan-application" */'../views/NewLoanApplication'));
const ApplyNewLoanApplication = lazy(() => import(/* webpackChunkName: "apply-new-loan-application" */'../views/ApplyNewLoanApplication'));
const DirectorsInformation = lazy(() => import(/* webpackChunkName: "directors-information" */'../views/DirectorsInformation'));
const CompleteRegistration = lazy(() => import(/* webpackChunkName: "complete-registration" */'../views/CompleteRegistration'));

const appRouter = [
    {
        path: '/home',
        component: HomeView,
        name: 'Home',
        icon: '',
        exact: true
    },
    {
        path: '/our-products',
        component: OurProducts,
        name: 'Home',
        icon: '',
    },
    {
        path: '/enquiries',
        component: Enquiries,
        name: 'Home',
        icon: '',
    },
    {
        path: '/new-loan/:product',
        component: ApplyNewLoanApplication,
        name: 'Home',
        icon: '',
    },
    {
        path: '/new-loan',
        component: NewLoanApplication,
        name: 'Home',
        icon: '',
    },
    
    {
        path: '/directors-information',
        component: DirectorsInformation,
        name: 'Home',
        icon: '',
    },
    {
        path: '/complete-registration',
        component: CompleteRegistration,
        name: 'Home',
        icon: '',
    },
    {
        path: '/borrower-login',
        component: HomeView,
        name: 'Home',
        icon: '',
    },
    {
        path: '/broker-signup',
        component: HomeView,
        name: 'Home',
        icon: '',
    },
    {
        path: '/borrower-signup',
        component: HomeView,
        name: 'Home',
        icon: '',
    },
    {
        path: '/about-us',
        component: AboutUs,
        name: 'Home',
        icon: '',
    },
]

export default appRouter;