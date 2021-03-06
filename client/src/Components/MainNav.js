import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import '../App.css';
import '../Responsive.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

class MainNav extends Component {
  state = {
    loggedOut: false,
    name: ''
  }

  myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-headings") {
      x.className += " responsive";
    } else {
      x.className = "nav-headings";
    }
  }
 

  handleLogOut = () => {
    const url = process.env.REACT_APP_API_URL + "/auth/logout"
    axios.get(url)
        .then(resp => {
          localStorage.removeItem('user')
            this.setState({loggedOut: true})
        })
        .catch(err => {
            console.log(err)
        })
  }

  getName = (user) => {
    axios.get(process.env.REACT_APP_API_URL + `/protected/users/${user}`)
        .then(resp => {
            this.setState({name: resp.data.username})
        })
  }

  render() {
    if(this.state.loggedOut){
      return(
        <Redirect to='/login' />
      )
    }

    const user = localStorage.getItem('user')


    if(user) {
      const name = this.getName(user)
      const profile = (this.state.name === "lillafabrik")?  "/adminprofile" : "/userprofile"
      
      return (
        
        <div className="main-nav">
          <h1 className="main-heading">Music Lessons With Lilla</h1>

          <div className="line-under-headings">
              <svg width="90%" height="6" viewBox="0 0 929 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="64.0007" y1="3.88623" x2="864.081" y2="3.02206" stroke="#2B2321" strokeWidth="1"/>
                  <circle cx="40.0029" cy="3.02206" r="1.5" fill="#2B2321"/>
                  <circle cx="21.0029" cy="3.02206" r="1.5" fill="#2B2321"/>
                  <circle cx="2.00287" cy="3.02206" r="1.5" fill="#2B2321"/>
                  <circle cx="926.003" cy="3.02206" r="1.5" fill="#2B2321"/>
                  <circle cx="907.003" cy="3.02206" r="1.5" fill="#2B2321"/>
                  <circle cx="888.003" cy="3.02206" r="1.5" fill="#2B2321"/>
              </svg>
          </div>

          <div className="nav-headings" id="myTopnav">
              <Link to='/home' className="nav-links">Home</Link>
              <Link to='/lessons' className="nav-links">Lessons</Link>
              <Link to='/policies' className="nav-links">Policies</Link>
              <Link to='/contact' className="nav-links">Contact</Link>              
              <a href={profile} className="nav-links">Welcome &nbsp;<span className="username">{this.state.name}</span></a>              
              <a href="#logout" onClick={this.handleLogOut} className="nav-links">Logout</a>
              <a href="javascript:void(0);" className="icon nav-links" onClick={()=> this.myFunction()}>&#9776;</a>
        </div>
      </div>
      )
    } else {
       return (
        <div className="main-nav">
        <h1 className="main-heading">Music Lessons With Lilla</h1>

        <div className="line-under-headings">
            <svg width="90%" height="6" viewBox="0 0 929 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="64.0007" y1="3.88623" x2="864.081" y2="3.02206" stroke="#2B2321" stroke-width="1"/>
                <circle cx="40.0029" cy="3.02206" r="1.5" fill="#2B2321"/>
                <circle cx="21.0029" cy="3.02206" r="1.5" fill="#2B2321"/>
                <circle cx="2.00287" cy="3.02206" r="1.5" fill="#2B2321"/>
                <circle cx="926.003" cy="3.02206" r="1.5" fill="#2B2321"/>
                <circle cx="907.003" cy="3.02206" r="1.5" fill="#2B2321"/>
                <circle cx="888.003" cy="3.02206" r="1.5" fill="#2B2321"/>
            </svg>
        </div>

        <div className="nav-headings" id="myTopnav">
            <Link to='/home' className="nav-links">Home</Link>
            <Link to='/lessons' className="nav-links">Lessons</Link>
            <Link to='/policies' className="nav-links">Policies</Link>
            <Link to='/contact' className="nav-links">Contact</Link>
            <Link to='/login' className="nav-links">Login</Link>
            <a href="javascript:void(0);" className="icon nav-links" onClick={()=> this.myFunction()}>&#9776;</a>
        </div>
      </div>
      )
    }
  }
}

export default MainNav;
