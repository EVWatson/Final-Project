
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import loginstyles from '../LoginForm.css';
import '../App.css';
import MainNav from './MainNav';

axios.defaults.withCredentials = true;

class LoginForm extends Component {
    state = {
        redirectToProfilePage: false,
        redirectToAdminProfilePage: false
    }

    handleInputChange = (e) => {
        const { value, id } = e.currentTarget;
        this.setState({ [id]: value });
    }

    submitLogin = (e) => {
        e.preventDefault();

        const { username, password } = this.state;
        const url = process.env.REACT_APP_API_URL + "/auth/login"
        const data = {
            username,
            password
        }

        axios.post(url, data)
            .then(resp => {
                console.log(resp.data._id)
                localStorage.setItem('user', resp.data._id)

                if(data.username == "lillafabrik"){
                    this.setState({redirectToAdminProfilePage: true})
                } else {
                    this.setState({redirectToProfilePage: true }) //the page rerenders asa redirectToProfilePage became true. so moved this line after local storage is set
                }
            })

            .catch(err => {
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

        if (this.state.redirectToAdminProfilePage) {
            return (
                <Redirect to='/adminprofile' />
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
                            <input type="text" id="username" placeholder="Username" onChange={this.handleInputChange} className="login-form-fields"/>
                            <br/>
                            
                            <input type="password" id="password" placeholder="Password" onChange={this.handleInputChange} className="login-form-fields"/>
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
