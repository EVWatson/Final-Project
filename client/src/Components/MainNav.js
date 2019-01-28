import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../App.css';
import '../Responsive.css';


class MainNav extends Component {
  myFunction = () => {
    // console.log(e.target.parent)
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-headings") {
      x.className += " responsive";
    } else {
      x.className = "nav-headings";
    }
  }

  render() {
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
            {/* <Link to='/home' component={App} className="nav-links">Home</Link>
            <Link to='/about#contact' component={Bio} ref="#contact" className="nav-links">About</Link>
            <Link to='/lessons' component={App} className="nav-links">Lessons</Link>
            <Link to='/policies' component={App} className="nav-links">Policies</Link>
            <Link to='/contact' component={App} className="nav-links">Contact</Link>
            <Link to='/login/register' component={App} className="nav-links">Login/Register</Link> */}
            <a href="#home" className="nav-links active">Home</a>
            <a href="#about" className="nav-links">About</a>
            <a href="#lessons" className="nav-links">Lessons</a>
            <a href="#policies" className="nav-links">Policies</a>
            <a href="#contact" className="nav-links">Contact</a>
            <a href="#about" className="nav-links">Login/Register</a>
            <a href="javascript:void(0);" className="icon nav-links" onClick={()=> this.myFunction()}>&#9776;</a>

        </div>
      </div>
    );
  }
}

export default MainNav;
