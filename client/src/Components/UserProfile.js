import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import '../App.css';

class UserProfile extends Component {
    state = {
        redirectToIndexPage: false

    }

    logOut = () => {
        const url = "http://localhost:5001/auth/logout"
        axios.get(url)
            .then(resp => {
                console.log(resp.data)

                this.setState({ redirectToIndexPage: true })
            })
            .catch(err => {
                console.log(err)
            })
    }

      getId = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user);
      }

    render() {
      this.getId();
        if (this.state.redirectToIndexPage) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div className="login-form">
                <p>In My Dashboard</p>
                <Link to='/booking' >Make a booking</Link>
                <button type="submit" onClick={this.logOut}>Logout</button>
            </div>
        );
    }
}

export default UserProfile;
