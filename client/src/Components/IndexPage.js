import React, { Component } from 'react';

import '../App.css';
import '../Responsive.css';
import lilla from '../lilla.jpg';
import music from '../music.png';
import music1 from '../music1.png';


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

        {/* three dots */}
        <svg className="three-dots" width="43" height="5" viewBox="0 0 43 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 2.0014 2.09164)" fill="#2B2321"/>
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 21.0015 2.00131)" fill="#2B2321"/>
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 40.0015 2.01449)" fill="#2B2321"/>
        </svg>

        <div className="lessons">
            <p className="main-sub-heading center-header ">Music Lessons</p>
            <p className="bio-text">{this.props.bio.lessons}</p>
        </div>

        <img src={music}  className="music-pic"  id="lessons" alt="Music Signs"/>

        <div className="location">
            <p className="sub-heading">Teaching Locations</p>
                
            <table className="loc-table"> 
                <tbody>
                    <tr>
                        <td><b>No:</b></td>
                        <td><b>Location</b></td>
                        <td><b>Address</b></td>                    
                    </tr>

                    {this.props.locations.map((loc, i) => 
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{loc.name}</td>
                            <td>{loc.address}</td>
                        </tr>                   
                    )}
                </tbody>
            </table>
        </div>

        <div className="rates">
            <p className="sub-heading">Rates and Payment</p>
            <p className="bio-text">{this.props.bio.ratesPayment}</p>
        </div>

        <div className="policies" id="policies">
            <p className="main-sub-heading center-header">Policies</p>
            <p className="bio-text">{this.props.bio.policies}</p>
        </div>

        {/* three dots */}
        <svg className="three-dots-2" width="43" height="5" viewBox="0 0 43 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 2.0014 2.09164)" fill="#2B2321"/>
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 21.0015 2.00131)" fill="#2B2321"/>
            <circle r="2" transform="matrix(-1 -0.000689088 -0.000689088 1 40.0015 2.01449)" fill="#2B2321"/>
        </svg>
       
        <img src={music1}  className="contact-pic" id="contact" alt="Music Signs"/>
        
        <div className="contact" >
            <p className="main-sub-heading">Contact Lilla</p>
            <p className="bio-text"><span className="phn-label"><b>Phone: </b></span>{this.props.bio.phone}</p>
            <p className="bio-text"><span className="eml-label"><b>Email: </b></span>{this.props.bio.email}</p>
        </div>

         <div className="contact-form">
            <p className="sub-heading">Send Lilla a Message!</p>
            <form>
                {/* <label for="sender-name" className="cform-label">Full Name:</label> */}
                <input type="text" name="sender-name" placeholder="Enter your name here"  className="ct-form-fields"/>
                <br/>
                {/* <label for="sender-phone" className="cform-label">Contact Number:</label> */}
                <input type="text" name="sender-phone" placeholder="Enter your contact number here" className="ct-form-fields"/>
                <br/>
                {/* <label for="sender-email" className="cform-label">Email:</label> */}
                <input type="text" name="sender-email" placeholder="Enter your email here" className="ct-form-fields"/>
                <br/>
                {/* <label for="message" className="cform-label">Message:</label> */}
                <textarea name="message" id="message" placeholder="Enter your message here" className="ct-form-fields"/>
                <br/>
                <button type="submit" className="ct-form-btn">Send &nbsp; Message</button>
            </form>
        </div>
      </div>
    );
  }
}

export default IndexPage;
