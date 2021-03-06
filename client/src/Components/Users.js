import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import MainNav from './MainNav';

axios.defaults.withCredentials = true;

class Users extends Component {

componentDidMount() {
  const url = process.env.REACT_APP_API_URL + '/protected/users/'
  axios.get(url)
    .then(resp => {
      const users = resp.data
      let html = ''
      users.forEach((user) => {
        console.log(user)
        const id = user._id
        html += `
        <a href="https://lms-lilla.netlify.com/users/${id}"> 
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
