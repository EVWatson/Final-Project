
import React, { Component } from 'react';
import axios from 'axios';
// import { Redirect } from "react-router-dom";
// import { Link } from 'react-router-dom';
import '../App.css';
import bookformstyles from '../BookingForm.css'; 
import MainNav from './MainNav';

axios.defaults.withCredentials = true;

class BookingForm extends Component {
  state = {
    day: "Monday",
    location: "Home",
    time: "0900",
    duration: 30,
    instrument: "Voice"
  }

  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    this.setState({ [id]: value });
    // this.setState({value: e.target.value})
  }
  
  submitForm = (e) => {
    
    e.preventDefault()
    
    const {
      day,
      location,
      time,
      duration,
      instrument
    } = this.state

    const userId = this.getId()

    const data = {
      day,
      location,
      time,
      duration,
      instrument,
      booked_by: userId
    }
    console.log(data)
    const url = process.env.REACT_APP_API_URL + '/protected/booking/create'
    axios.post(url, data)
      .then((res) => {
        console.log(res.data)
        alert("Thankyou!  Your booking is submitted.");
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  getId = () => {
    const userId = localStorage.getItem('user')
    return userId
}

  render() {
    const userId = this.getId();
    return(
      <div className="wrapper">
        <MainNav />
        <div className={bookformstyles.container}>
            <div className="booking">
                  <p className="booking-hdr">Book Lesson</p>
                  <div className="bookingform">
                        <div className="bform-group">
                            <label for='day' className="bform-label">Day: </label>
                            <select value={this.state.day} onChange={this.handleInputChange} id="day">
                              <option value="Monday">Monday</option>
                              <option value="Tuesday">Tuesday</option>
                              <option value="Wednesday">Wednesday</option>
                              <option value="Thursday">Thursday</option>
                              <option value="Friday">Friday</option>
                              <option value="Saturday">Saturday</option>
                            </select>
                        </div>
                        <br/>

                        <div className="bform-group"> 
                            <label for='location' className="bform-label">Location: </label>
                            <select value={this.state.location} onChange={this.handleInputChange} id="location">
                                <option value="Location 1">Lilla's Music Studio</option>
                                <option value="Location 2">Devonport Christian School</option>
                            </select>
                        </div>
                      <br/>

                      <div className="bform-group">
                        <label for='time' className="bform-label">Time: </label>
                        <select value={this.state.time} onChange={this.handleInputChange} id="time">
                          <option value="0900">09.00</option>
                          <option value="0915">09.15</option>
                          <option value="0930">09.30</option>
                          <option value="0945">09.45</option>
                          <option value="1000">10.00</option>
                          <option value="1015">10.15</option>
                          <option value="1030">10.30</option>
                          <option value="1045">10.45</option>
                          <option value="1100">11.00</option>
                          <option value="1115">11.15</option>
                          <option value="1130">11.30</option>
                          <option value="1145">11.45</option>
                          <option value="1200">12.00</option>
                          <option value="1215">12.15</option>
                          <option value="1230">12.30</option>
                          <option value="1245">12.45</option>
                          <option value="1300">13.00</option>
                          <option value="1315">13.15</option>
                        </select>
                      </div>
                      <br/>

                      <div className="bform-group">
                        <label for='duration' className="bform-label">Duration: </label>
                        <select value={this.state.duration} onChange={this.handleInputChange} id="duration">
                          <option value="+30">30</option>
                          <option value="+45">45</option>
                          <option value="+60">60</option>
                        </select>
                      </div>
                      <br/>

                      <div className="bform-group">
                        <label for='instrument' className="bform-label">Instrument: </label>
                        <select value={this.state.instrument} onChange={this.handleInputChange} id="instrument">
                          <option value="Voice">Voice</option>
                          <option value="Piano">Piano</option>
                          <option value="Flute">Flute</option>
                          <option value="Theory">Theory</option>
                        </select>
                      </div>


                      <input type='hidden' value={userId}/>
                      <br/>
                      <button type="submit" className="bform-btn" onClick={this.submitForm}>Book</button>
                  </div>
                </div>
              </div>
            </div>

    )
  }
}

export default BookingForm;
