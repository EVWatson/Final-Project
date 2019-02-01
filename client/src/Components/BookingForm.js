
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../App.css';

class BookingForm extends Component {
  state = {}

  render() {
    return(
      <div>
        <label for='day'>Day</label>
        <input type='text' id='day'/>

        <label for='location'>Location</label>
        <input type='text' id='location'/>

        <label for='time'>Time</label>
        <input type='text' id='time'/>

        <label for='duration'>Duration</label>
        <input type='number' id='duration'/>

        <label for='instrument'>Instrument</label>
        <input type='text' id='instrument'/>


        <input type='hidden' value=''/>

      </div>
    )
  }
}

export default BookingForm;
