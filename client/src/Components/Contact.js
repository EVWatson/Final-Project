import React, { Component } from 'react';
import axios from 'axios';
import constyles from '../Contact.css';
import '../App.css';
import '../Responsive.css';
import music1 from '../music1.png';
import MainNav from './MainNav';

axios.defaults.withCredentials = true;

class Lessons extends Component {
  state = {bio: {}}

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "/admin-bio")
      .then(resp => {
        this.setState({bio: resp.data})
      })
  }

  render() {
    return (
      <div className="wrapper">
        <MainNav />
        <div className={constyles.container}>
            <div className="con">
                <img src={music1}  className="contact-pic" id="contact" alt="Music Signs"/>

                <div className="contact" >
                    <p className="main-sub-heading">Contact Lilla</p>
                    <p className="bio-text"><span className="phn-label"><b>Phone: </b></span>{this.state.bio.phone}</p>
                    <p className="bio-text"><span className="eml-label"><b>Email: </b></span>{this.state.bio.email}</p>
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
            </div>
           </div>

    );
  }
}

export default Lessons;
