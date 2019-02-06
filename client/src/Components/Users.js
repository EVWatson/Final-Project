import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect} from 'react-router-dom';
import adminstyles from '../AdminProfile.css';
import '../App.css';
import MainNav from './MainNav';
import userimage from '../userimage.png'
import UserDetails from './UserDetails'

class Users extends Component {

componentDidMount() {
  const url = 'http://localhost:5001/protected/users/'
  axios.get(url)
    .then(resp => {
      const users = resp.data
      let html = ''
      users.forEach((user) => {
        console.log(user)
        const id = user._id
        html += `
        <a href="http://localhost:3000/users/${id}"> 
            <p>${user.student_first_name} ${user.student_last_name}</p>
        </a>
        `
      })
      const list = document.querySelector('.users')
      list.innerHTML = html
    })
    .catch(error => console.log(error))
};

    render() {

        return (
            <div className="wrapper">
                <MainNav />
                        <div className="users">
                        </div>
                    </div>
        );
    }
  }

export default Users;
