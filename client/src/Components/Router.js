import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import RegisterForm from './RegisterForm';
import Lessons from './Lessons';
import Policies from './Policies';
import Contact from './Contact';
import BookingForm from './BookingForm';
import AdminProfile from './AdminProfile';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/home' component={App} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/userprofile' component={UserProfile} />
            <Route exact path='/register' component={RegisterForm} />
            <Route exact path='/lessons' component={Lessons} />
            <Route exact path='/policies' component={Policies} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/booking' component={BookingForm} />
            <Route exact path='/adminprofile' component={AdminProfile} />

        </Switch>
    </BrowserRouter>
)

export default Router;
