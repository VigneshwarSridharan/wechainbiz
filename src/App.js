import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import appRouter from './router';
import NavigationBar from './layout/NavigationBar';
import './assets/scss/app.scss';
import Footer from './layout/Footer';
import Preloader from './utils/Preloader';

function App() {
    return (
        <React.Fragment>
            <NavigationBar />
            <BrowserRouter>
                <Suspense fallback={<Preloader />} >
                    <Switch>
                        {
                            appRouter.map((routeProps, inx) => {
                                return (
                                    <Route {...routeProps} key={inx} />
                                )
                            })
                        }
                    </Switch>
                </Suspense>
            </BrowserRouter>
            <Footer />
        </React.Fragment>
    );
}

export default App;
