import React, { Component } from 'react';

import '../App.css';
import '../Responsive.css';
import lilla from '../lilla.jpg';
// import Lessons from './Lessons';
// import Policies from './Policies';
// import Contact from './Contact';


class IndexPage extends Component {
    
  render() {
    // const user = localStorage.getItem('user')
    return (
      <div className="idx"> 
        
        <img src={lilla}  className="lilla-pic" alt="Lilla"/>

        <div className="about" id="about">
            <p className="main-sub-heading">About Lilla</p>
            <p className="bio-text">{this.props.bio.about}</p>
        </div>       

        <div className="qualifications">
            <p className="sub-heading">Qualifications</p>
            <p className="bio-text">{this.props.bio.qualifications}</p>
        </div> 

        <div className="philosophy">
            <p className="sub-heading">Teaching Philosophy</p>
            <p className="bio-text">{this.props.bio.teachingPhilosophy}</p>
        </div> 

        {/* three dots
        <svg className="three-dots" width="43" height="5" viewBox="0 0 43 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 2.0014 2.09164)" fill="#2B2321"/>
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 21.0015 2.00131)" fill="#2B2321"/>
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 40.0015 2.01449)" fill="#2B2321"/>
        </svg>

        <Lessons bio={this.props.bio} locations={this.props.locations}/>

        {/* three dots */}
        {/* <svg className="three-dots-2" width="43" height="5" viewBox="0 0 43 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 2.0014 2.09164)" fill="#2B2321"/>
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 21.0015 2.00131)" fill="#2B2321"/>
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 40.0015 2.01449)" fill="#2B2321"/>
        </svg>

        <Policies bio={this.props.bio} />
        
        {/* three dots */}
        {/* <svg className="three-dots-2" width="43" height="5" viewBox="0 0 43 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 2.0014 2.09164)" fill="#2B2321"/>
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 21.0015 2.00131)" fill="#2B2321"/>
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 40.0015 2.01449)" fill="#2B2321"/>
        </svg> */}


        {/* <Contact  bio={this.props.bio} />  */}
       
        
      </div>
    );
  }
}

export default IndexPage;
