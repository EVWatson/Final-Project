import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import LoginPage from './LoginPage'


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/login' component={LoginPage} />
        </Switch>
    </BrowserRouter>
)

export default Router;
