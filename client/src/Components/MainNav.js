import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from './App';
import '../App.css';


class MainNav extends Component {
  render() {
    return (
      <div className="main-nav">
        <h1 className="main-heading">Music Lessons With Lilla</h1>
        
        <div className="line-under-headings">
            <svg width="929" height="6" viewBox="0 0 929 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="64.0007" y1="3.88623" x2="864.081" y2="3.02206" stroke="#2B2321" stroke-width="1"/>
                <circle cx="40.0029" cy="3.02206" r="1.5" fill="#2B2321"/>
                <circle cx="21.0029" cy="3.02206" r="1.5" fill="#2B2321"/>
                <circle cx="2.00287" cy="3.02206" r="1.5" fill="#2B2321"/>
                <circle cx="926.003" cy="3.02206" r="1.5" fill="#2B2321"/>
                <circle cx="907.003" cy="3.02206" r="1.5" fill="#2B2321"/>
                <circle cx="888.003" cy="3.02206" r="1.5" fill="#2B2321"/>
            </svg>
        </div>
        
        <div className="sub-headings">
            <Link to='/home' component={App} className="sub-header-links">Home</Link>
            <Link to='/about' component={App} className="sub-header-links">About</Link>
            <Link to='/lessons' component={App} className="sub-header-links">Lessons</Link>
            <Link to='/policies' component={App} className="sub-header-links">Policies</Link>
            <Link to='/contact' component={App} className="sub-header-links">Contact</Link>
            <Link to='/login/register' component={App} className="sub-header-links">Login/Register</Link>
        </div>
      </div>
    );
  }
}

export default MainNav;
