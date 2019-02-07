import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import MainNav from './MainNav';


axios.defaults.withCredentials = true;

class EditDetails extends Component {
    state = {
        userDetails: {}
    }

    submitForm = (e) => {
        e.preventDefault();
        const queryParams = window.location.href;
        const split = queryParams.split('/')
        const id = split[4]
        const url = process.env.REACT_APP_API_URL + `/protected/users/${id}`
        const {
            role,
            username,
            password,
            email,
            student_first_name,
            student_last_name,
            parent_first_name,
            parent_last_name,
            primary_contact_first_name,
            primary_contact_last_name,
            primary_contact_number,
            address,
            primary_instrument,
            primary_learning_location,
            experience,
         currently_enrolled
             } = this.state;
    
        const data = {
            role,
            username,
            password,
            email,
            student_first_name,
            student_last_name,
            parent_first_name,
            parent_last_name,
            primary_contact_first_name,
            primary_contact_last_name,
            primary_contact_number,
            address,
            primary_instrument,
            primary_learning_location,
            experience,
            currently_enrolled,
            id    }
    
        axios.patch(url, data)
            .then(res => {
                console.log(res)
                // this.setState({ redirectToNewPage: true })
            })
            .catch(err => {
                console.log(err)
            })
        }

componentDidMount = () => {
  const queryParams = window.location.href;
  const split = queryParams.split('/')
  const id = split[4]
  console.log(split)
  const url = process.env.REACT_APP_API_URL + `/protected/users/${id}`

  axios.get(url)
    .then(resp => {
        const userDetails = resp.data
        console.log(userDetails)

        

        const html = `
                        <form>

                        <input type="hidden"
                            id="id"
                            value=${userDetails._id}
                            className="ed-form-fields"
                        />

                        <input type="hidden"
                            id="username"
                            value=${userDetails.username}
                            className="ed-form-fields"
                        />

                        <input type="hidden"
                            id="password"
                            value=${userDetails.password}
                            className="ed-form-fields"
                        />

                        <input type="hidden"
                            id="role"
                            value=${userDetails.role}
                            className="ed-form-fields"
                        />

                        <input type="hidden"
                            id="parent_first_name"
                            value=${userDetails.parent_first_name}
                            className="ed-form-fields"
                        />

                        <input type="hidden"
                            id="parent_last_name"
                            value=${userDetails.parent_last_name}
                            className="ed-form-fields"
                        />

                        <input type="hidden"
                            id="experience"
                            value=${userDetails.experience}
                            className="ed-form-fields"
                        />

                        <input type="hidden"
                            id="currently_enrolled"
                            value=${userDetails.currently_enrolled}
                            className="ed-form-fields"
                        />


                        <label for='first-name'>First Name: </label>
                        <input type="text"
                               id="student_first_name"
                               value=${userDetails.student_first_name}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='last-name'>Last Name: </label>
                        <input type="text"
                               id="student_last_name"
                               value=${userDetails.student_last_name}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='location'>Location: </label>
                        <input type="text"
                               id="primary_learning_location"
                               value=${userDetails.primary_learning_location}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='address'>Address: </label>
                        <input type="text"
                               id="address"
                               value=${userDetails.address}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='email'>Email: </label>
                        <input type="text"
                               id="email"
                               value=${userDetails.email}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='primary_contact_first'>Primary Contact First Name: </label>
                        <input type="text"
                               id="primary_contact_first"
                               value=${userDetails.primary_contact_first_name}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='primary_contact_last'>Primary Contact Last Name: </label>
                        <input type="text"
                               id="primary_contact_last"
                               value=${userDetails.primary_contact_last_name}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <label for='primary_contact_number'>Primary Contact Number: </label>
                        <input type="text"
                               id="primary_contact_number"
                               value=${userDetails.primary_contact_number}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />
                        <label for='primary_instrument'>Primary Instrument: </label>
                        <input type="text"
                               id="primary_instrument"
                               value=${userDetails.primary_instrument}
                               onChange=${this.handleInputChange}
                               className="ed-form-fields"
                        />

                        <button type="submit" onClick=${this.submitForm}>Update Details</button>
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
