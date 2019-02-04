
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import loginstyles from '../LoginForm.css';
import '../App.css';
import MainNav from './MainNav';

class LoginForm extends Component {
    state = {
        redirectToProfilePage: false
        // loggedUser: {}
    }

    handleInputChange = (e) => {
        const { value, id } = e.currentTarget;
        this.setState({ [id]: value });
    }

    submitLogin = (e) => {
        e.preventDefault();

        const { username, password } = this.state;
        const url = "https://lms-lilla-21rmd2qxr.now.sh/auth/login"
        const data = {
            username,
            password
        }

        axios.post(url, data)
            .then(resp => {
                localStorage.setItem('user', JSON.stringify(resp.data._id));
                this.setState({redirectToProfilePage: true }) //the page rerenders asa redirectToProfilePage became true. so moved this line after local storage is set
            })
            .catch(err => { console.log(err) //fix the err here
                const { status } = err.response
                if (status === 401){
                    this.setState({error: 'Incorrect username or password.', message: undefined})
                }
            })
    }

    render() {

        if (this.state.redirectToProfilePage) {

            return (
                <Redirect to='/userprofile' />
            )
        }

        const { error, message } = this.state

        return (
            <div className="wrapper">
                <MainNav />
                <div className={loginstyles.container}>
                    <div className="login">
                        <p className="sub-heading login-hdr">Login</p>

                        <form className="loginform">
                            {/* <label for="sender-name" className="cform-label">User Name</label> */}
                            <input type="text" id="username" placeholder="Username" onChange={this.handleInputChange} className="login-form-fields"/>
                            <br/>
                            {/* <label for="sender-phone" className="cform-label">Password</label> */}
                            <input type="text" id="password" placeholder="Password" onChange={this.handleInputChange} className="login-form-fields"/>
                            <br/>

                            { error && <p>{ error }</p>}
                            { message && <p>{ message }</p>}

                            <button type="submit" onClick={this.submitLogin} className="lbtn">Login</button>
                            <p className="or"> Or</p>
                            <button className="rbtn"><Link to='/register' className="rbtn-link">Register</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
