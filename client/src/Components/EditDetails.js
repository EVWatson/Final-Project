import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect} from 'react-router-dom';
import adminstyles from '../AdminProfile.css';
import '../App.css';
import MainNav from './MainNav';
import userimage from '../userimage.png';
import UserProfile from './UserProfile';

class EditDetails extends Component {
    state = {
        userObject: {}
    }

componentDidMount = () => {
  const queryParams = window.location.href;
  const split = queryParams.split('/')
  const id = split[4]
  console.log(split)
  const url = `http://localhost:5001/protected/users/${id}`
  axios.get(url)
    .then(resp => {
        const userDetails = resp.data
        console.log(userDetails)
        const contact_number = userDetails.primary_contact_number
        const html = `
                        <form>
                        <label for='first-name'>First Name: </label>
                        <input type="text"
                               id="student_first_name"
                               placeholder=${userDetails.student_first_name}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='last-name'>Last Name: </label>
                        <input type="text"
                               id="student_last_name"
                               placeholder=${userDetails.student_last_name}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='location'>Location: </label>
                        <input type="text"
                               id="primary_learning_location"
                               placeholder=${userDetails.primary_learning_location}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='address'>Address: </label>
                        <input type="text"
                               id="address"
                               placeholder=${userDetails.address}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='email'>Email: </label>
                        <input type="text"
                               id="email"
                               placeholder=${userDetails.email}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='primary_contact_first'>Primary Contact First Name: </label>
                        <input type="text"
                               id="primary_contact_first"
                               placeholder=${userDetails.primary_contact_first_name}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='primary_contact_last'>Primary Contact Last Name: </label>
                        <input type="text"
                               id="primary_contact_last"
                               placeholder=${userDetails.primary_contact_last_name}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='primary_contact_number'>Primary Contact Number: </label>
                        <input type="text"
                               id="primary_contact_number"
                               placeholder=${contact_number}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />
                        <label for='primary_instrument'>Primary Instrument: </label>
                        <input type="text"
                               id="primary_instrument"
                               placeholder=${userDetails.primary_instrument}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <button type="submit" onClick={this.submitForm}>Update Details</button>
                        </form>
                    `
        const list = document.querySelector('.editDetails')
      list.innerHTML = html
      })
    .catch(error => console.log(error))
};

    render() {
        return (
            <div className="wrapper">
                <MainNav />
                <div className="editDetails">
                </div>
            </div>
        );
    }
}

export default EditDetails;