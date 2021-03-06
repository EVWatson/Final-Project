import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import userstyles from '../UserProfile.css';
import '../App.css';
import MainNav from './MainNav';
import userimage from '../userimage.png'

axios.defaults.withCredentials = true;

class UserProfile extends Component {
    state = {
        userObject: {},
        userBooking: {}
    }

    componentDidMount = () => {
        const userId = this.getId();
        console.log(userId)

        axios.get(process.env.REACT_APP_API_URL + `/protected/users/${userId}`)
        .then(resp => {
            console.log(resp.data);
            this.setState({userObject: resp.data})
        })

        //axios.get dint work with a req.body. was fine in postman
        // const data = {
            //     userId
            // }
        // const url=

        axios.get(process.env.REACT_APP_API_URL + `/protected/booking/${userId}`)
        .then((res) => {
            console.log(res.data)
            this.setState({userBooking: res.data})
        })
        .catch(err => console.log(err))
    }

    getId = () => {
        const userId = localStorage.getItem('user')
        return userId
    }

    render() {
        const userId = this.getId();
        const linkToBookingForm = {
            pathname: '/booking',
            state: {
                userId: userId
            }
        }
        const linkToEditDetails = {
            pathname: `/editdetails/${userId}`
        }

        const userObject = this.state.userObject
        const userBooking = this.state.userBooking
        console.log(userId)

        return (
            <div className="wrapper">
                <MainNav />

                <div className={userstyles.container}>
                    <div className="userprofile">
                        <div className="user-panel">
                            <img src={userimage}  className="user-pic" alt="User"/>
                            <Link to={linkToEditDetails} className="pnl-link-1">Edit my Profile</Link><br/>
                            <Link to={linkToBookingForm} className="pnl-link-2">Make a Booking</Link>
                        </div>

                        <div className="user-details">
                            <p className="main-sub-heading">My Details</p>
                            <table className="userprofile-table">
                                <tbody>
                                    <tr>
                                        <td>Student Name:</td>
                                        <td><strong>{userObject.username}</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Primary Contact:</td>
                                        <td><strong>{userObject.primary_contact_first_name}  {userObject.primary_contact_last_name}</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Primary Contact Number:</td>
                                        <td><strong>{userObject.primary_contact_number}</strong> </td>
                                    </tr>

                                    <tr>
                                        <td>Learning Location:</td>
                                        <td><strong>{userBooking.location} </strong></td>
                                    </tr>
                                    <tr>
                                        <td>Day:</td>
                                        <td><strong>{userBooking.day}</strong> </td>
                                    </tr>
                                    <tr>
                                        <td>Time:</td>
                                        <td><strong>{userBooking.time} </strong></td>
                                    </tr>
                                    <tr>
                                        <td>Instrument:</td>
                                        <td><strong>{userBooking.instrument}</strong> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
