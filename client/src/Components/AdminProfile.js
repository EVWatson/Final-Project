import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect} from 'react-router-dom';
import adminstyles from '../AdminProfile.css';
import '../App.css';
import MainNav from './MainNav';
import userimage from '../userimage.png'

class AdminProfile extends Component {
    state = {  }

componentDidMount() {
  const url = 'http://localhost:5001/protected/bookings'
  axios.get(url)
    .then(resp => {
      const booking = resp.data
      let html = ''
      booking.forEach((book) => {
        html += `
        <p>Time: ${book.time}, Duration: ${book.duration}, Location: ${book.location}</p></br>
        `
      })
      const list = document.querySelector('.schedule')
      list.innerHTML = html
    })
    .catch(error => console.log(error))
};

    render() {

        return (
            <div className="wrapper">
                <MainNav />
                <div className={adminstyles.container}>
                    <div className="adminprofile">
                        <div className="admin-panel">
                            <img src={userimage}  className="user-pic" alt="User"/>
                            <Link to='/editbiodetails' className="pnl-link-1">Edit my Profile</Link><br/>
                            <Link to='/students' className="pnl-link-2">Students</Link><br/>
                            // <Link to='/availability' className="pnl-link-3">Set Availability</Link> to be added later
                        </div>
                        <div className="schedule">

                            <ul>
                              <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }


export default AdminProfile;
