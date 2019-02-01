import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import LoginPage from './LoginPage'
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import RegisterForm from './RegisterForm';
import BookingForm from './BookingForm';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/myProfile' component={UserProfile} />
            <Route exact path='/register' component={RegisterForm} />
            <Route exact path='/booking' component={BookingForm} />
        </Switch>
    </BrowserRouter>
)

export default Router;
