import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import LoginPage from './LoginPage'
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import RegisterForm from './RegisterForm';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/myProfile' component={UserProfile} />
            <Route exact path='/register' component={RegisterForm} />
        </Switch>
    </BrowserRouter>
)

export default Router;
