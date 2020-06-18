import React, { Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import appRouter from './router';
import NavigationBar from './layout/NavigationBar';
import './assets/scss/app.scss';
import Footer from './layout/Footer';
import Preloader from './utils/Preloader';

function App() {
    return (
        <React.Fragment>
            <HashRouter>
                <NavigationBar />
                <Suspense fallback={<Preloader />} >
                    <Switch>
                        
                        {
                            appRouter.map(({ ...routeProps }, inx) => {
                                return (
                                    <Route {...routeProps} key={inx} />
                                )
                            })
                        }
                        <Redirect from="/" to='/home' />
                    </Switch>
                </Suspense>
            </HashRouter>
            <Footer />
        </React.Fragment>
    );
}

export default App;
