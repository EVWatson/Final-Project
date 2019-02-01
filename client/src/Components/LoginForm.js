
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../App.css';

class LoginForm extends Component {
    state = {
        redirectToProfilePage: false,
        loggedUser: {}
    }

    handleInputChange = (e) => {
        const { value, id } = e.currentTarget;
        this.setState({ [id]: value });
    }

    submitForm = (e) => {
        e.preventDefault();

        const { username, password } = this.state;
        const url = "http://localhost:5001/auth/login"
        const data = {
            username,
            password
        }

        axios.post(url, data)
            .then(resp => {
                // console.log(resp.data)
                this.setState({loggedUser: resp.data, redirectToProfilePage: true })
                localStorage.setItem('user', JSON.stringify(resp.data));                         
            })
            .catch(err => {
                const { status } = err.response
                if (status === 401){
                    this.setState({error: 'Incorrect username or password.', message: undefined})
                }
            })
    }

    render() {
        const newRegTo = {
            pathname: '/register',
            state: {
            //   locations: this.props.location.state.locations

            }
          }

          if (this.state.redirectToProfilePage) {
            const newPrTo = {
                pathname: '/',
                state: {
                    loggedUser: this.state.loggedUser
                }
            }
            return (
                <Redirect to={newPrTo} />
            )
        }
        // console.log(this.props.location.locations)
        const { error, message } = this.state

        return (
            <div className="login-form">
                <p className="sub-heading">Login</p>

                <form>
                    <label for="sender-name" className="cform-label">User Name</label>
                    <input type="text" id="username" placeholder="Username" onChange={this.handleInputChange}className="ct-form-fields"/>
                    <br/>
                    <label for="sender-phone" className="cform-label">Password</label>
                    <input type="text" id="password" placeholder="Password" onChange={this.handleInputChange} className="ct-form-fields"/>
                    <br/>

                    { error && <p>{ error }</p>}
                    { message && <p>{ message }</p>}
                    <button type="submit" onClick={this.submitForm}>Login</button>
                    or
                    <button><Link to={newRegTo} className="nav-links">Register</Link></button>
                </form>
            </div>
        );
    }
}

export default LoginForm;