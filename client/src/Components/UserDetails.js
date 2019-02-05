import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect} from 'react-router-dom';
import adminstyles from '../AdminProfile.css';
import '../App.css';
import MainNav from './MainNav';
import userimage from '../userimage.png'

class UserDetails extends Component {
    state = {  }

componentDidMount() {
  const queryParams = window.location.href;
  const split = queryParams.split('/')
  const id = split[4]
  console.log(split)
  const url = `http://localhost:5001/protected/users/${id}`
  axios.get(url)
    .then(resp => {
      const userDetails = resp.data
      console.log(userDetails)
      const html =`
      <p>Name: ${userDetails.student_first_name} ${userDetails.student_last_name}</p>
      <p>DOB: ${userDetails.student_dob}</p>
      <p>Email: ${userDetails.email}</p>
      <p>Gender: ${userDetails.gender}</p>
      <p>Address: ${userDetails.adress}</p>
      <p>Primary Instrument: ${userDetails.primary_instrument}</p>
      <p>Primary Contact: ${userDetails.primary_contact_first_name} ${userDetails.primary_contact_last_name}</p>
      <p>Primary Contact Number: ${userDetails.primary_contact_number}</p>
      <p>Primary Learning Location: ${userDetails.primary_learning_location}</p>
      <p>Experience: ${userDetails.experience}</p>
      <p>Enrollment Status: ${userDetails.currently_enrolled.enrolled} ${userDetails.currently_enrolled.day} ${userDetails.currently_enrolled.time}</p>
      `
      const list = document.querySelector('.userDetails')
      list.innerHTML = html
      })
    .catch(error => console.log(error))
};

    render() {
        return (
            <div className="wrapper">
                <MainNav />
                        <div className="userDetails">
                        </div>
                    </div>
        );
    }
}

export default UserDetails;