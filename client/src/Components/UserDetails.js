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
      <ul>
      <li>Name: ${userDetails.student_first_name} ${userDetails.student_last_name}</li>
      <li>DOB: ${userDetails.student_dob}</li>
      <li>Email: ${userDetails.email}</li>
      <li>Gender: ${userDetails.student_gender}</li>
      <li>Address: ${userDetails.address}</li>
      <li>Primary Instrument: ${userDetails.primary_instrument}</li>
      <li>Primary Contact: ${userDetails.primary_contact_first_name} ${userDetails.primary_contact_last_name}</li>
      <li>Primary Contact Number: ${userDetails.primary_contact_number}</li>
      <li>Primary Learning Location: ${userDetails.primary_learning_location}</li>
      <li>Experience: ${userDetails.experience}</li>
      <li>Enrollment Status: ${userDetails.currently_enrolled.enrolled} ${userDetails.currently_enrolled.day} ${userDetails.currently_enrolled.time}</li>
      </ul>
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