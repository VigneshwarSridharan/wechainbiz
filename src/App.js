import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import appRouter from './router';
import NavigationBar from './layout/NavigationBar';
import './assets/scss/app.scss';
import Footer from './layout/Footer';
import Preloader from './utils/Preloader';

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <NavigationBar />
                <Suspense fallback={<Preloader />} >
                    <Switch>
                        {
                            appRouter.map((routeProps, inx) => {
                                return (
                                    <Route {...routeProps} key={inx} />
                                )
                            })
                        }
                        <Redirect from="/" to='/home' />
                    </Switch>
                </Suspense>
            </BrowserRouter>
            <Footer />
        </React.Fragment>
    );
}

export default App;
