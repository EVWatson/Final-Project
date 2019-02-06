
import React, { Component } from 'react';
import axios from 'axios';
// import { Redirect } from "react-router-dom";
// import { Link } from 'react-router-dom';
import '../App.css';



class BookingForm extends Component {
  state = {}

  submitForm = (e) => {
    console.log("in sub")
    e.preventDefault()
    const values = Array.from(e.currentTarget.parentNode.childNodes)
    const day = values[1].value
    const location = values[3].value
    const time = values[5].value
    const duration = values[7].value
    const instrument = values[9].value
    const booked_by = values[10].value
    const data = {
      day,
      location,
      time,
      duration,
      instrument,
      booked_by
    }
    // console.log(data)
    const url = process.env.REACT_APP_API_URL + '/protected/booking/create'
    axios.post(url, data)
      .then((res) => {
        console.log(res.data)
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
      <div>
        <label for='day'>Day: </label>
        <select>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>

        <label for='location'>Location: </label>
        <select>
            <option value="Location 1">Home</option>
            <option value="Location 2">Location 2</option>
            <option value="Location 3">Location 3</option>
            <option value="Location 4">Location 4</option>
        </select>

        <label for='time'>Time: </label>
        <select>
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
          <option value="1330">13.30</option>
          <option value="1345">13.45</option>
          <option value="1400">14.00</option>
          <option value="1415">14.15</option>
          <option value="1430">14.30</option>
          <option value="1445">14.45</option>
          <option value="1500">15.00</option>
          <option value="1515">15.15</option>
          <option value="1530">15.30</option>
          <option value="1545">15.45</option>
          <option value="1600">16.00</option>
          <option value="1615">16.15</option>
          <option value="1630">16.30</option>
          <option value="1645">16.45</option>
          <option value="1700">17.00</option>
          <option value="1715">17.15</option>
          <option value="1730">17.30</option>
          <option value="1745">17.45</option>
          <option value="1800">18.00</option>
          <option value="1815">18.15</option>
          <option value="1830">18.30</option>
          <option value="1845">18.45</option>

        </select>

        <label for='duration'>Duration: </label>
        <select>
          <option value="+30">30</option>
          <option value="+45">45</option>
          <option value="+60">60</option>
        </select>

        <label for='instrument'>Instrument: </label>
        <select>
        <option value="Voice">Voice</option>
        <option value="Piano">Piano</option>
        <option value="Flute">Flute</option>
        <option value="Theory">Theory</option>
        </select>


        <input type='hidden' value={userId}/>

        <button type="submit" onClick={this.submitForm}>Book</button>
      </div>
    )
  }
}

export default BookingForm;
