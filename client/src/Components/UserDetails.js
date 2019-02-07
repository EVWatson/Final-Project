import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect} from 'react-router-dom';
import adminstyles from '../AdminProfile.css';
import '../App.css';
import MainNav from './MainNav';
import userimage from '../userimage.png'

axios.defaults.withCredentials = true;

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
      <li><strong>Name:</strong> ${userDetails.student_first_name} ${userDetails.student_last_name}</li> <br />
      <li><strong>DOB:</strong> ${userDetails.student_dob}</li> <br />
      <li><strong>Email:</strong>  ${userDetails.email}</li> <br />
      <li><strong>Gender:</strong> ${userDetails.student_gender}</li> <br />
      <li><strong>Address:</strong> ${userDetails.address}</li> <br />
      <li><strong>Primary Instrument:</strong> ${userDetails.primary_instrument}</li> <br />
      <li><strong>Primary Contact:</strong> ${userDetails.primary_contact_first_name} ${userDetails.primary_contact_last_name}</li> <br />
      <li><strong>Primary Contact Number:</strong> ${userDetails.primary_contact_number}</li> <br />
      <li><strong>Primary Learning Location:</strong> ${userDetails.primary_learning_location}</li> <br />
      <li><strong>Experience:</strong> ${userDetails.experience}</li> <br />
      <li><strong>Enrollment Status:</strong> ${userDetails.currently_enrolled.enrolled} ${userDetails.currently_enrolled.day} ${userDetails.currently_enrolled.time}</li> <br />
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