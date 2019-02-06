import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import '../App.css';
import registerstyles from '../RegisterForm.css';
import MainNav from './MainNav';

class RegisterForm extends Component {
    state = {
        redirectToProfilePage: false,
        locations: []
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + "/protected/locations")
            .then(resp => {
                 this.setState({locations: resp.data})
            })
    }


    handleInputChange = (e) => {
        const { value, id } = e.currentTarget;
        this.setState({ [id]: value });
    }

    submitForm = (e) => {
        e.preventDefault();

        const role = null;
        const enrolled = null
        const day = null
        const time = null

        const {
            username,
            password,
            email,
            student_first_name,
            student_last_name,
            student_dob,
            student_gender,
            parent_first_name,
            parent_last_name,
            primary_contact_first_name,
            primary_contact_last_name,
            primary_contact_number,
            address_1,
            address_2,
            address_3,
            address_4,
            address_5,
            primary_instrument,
            primary_learning_location,
            experience
             } = this.state;


        const url = process.env.REACT_APP_API_URL + "/users/new"
        const data = {
            role,
            username,
            password,
            email,
            student_first_name,
            student_last_name,
            student_dob,
            student_gender,
            parent_first_name,
            parent_last_name,
            primary_contact_first_name,
            primary_contact_last_name,
            primary_contact_number,
            address: `${address_1}, ${address_2}, ${address_3}, ${address_4}-${address_5}`,
            primary_instrument,
            primary_learning_location,
            experience,
            currently_enrolled:{enrolled, day, time}
        }

        axios.post(url, data)
            .then(resp => {
                localStorage.setItem('user', JSON.stringify(resp.data._id))
                this.setState({ redirectToProfilePage: true })
            })
            .catch(err => {
                const { status } = err.response
                if (status === 406){
                    this.setState({error: 'Please enter username and password', message: undefined})
                }
            })
    }

    getLocData = () => {
        const locations = this.state.locations
        return (
            this.state.locations.map(loc =>{
               return <option value={loc.name}>{loc.name}</option>
            })
        )
    }

    render() {
        const locOptions = this.getLocData()


        if (this.state.redirectToProfilePage) {
            return (
                <Redirect to="/userprofile" />
            )
        }

        const { error, message } = this.state
        return (
          <div className="wrapper">
            <MainNav />
            <div className={registerstyles.container}>
              <div className="register-form">
                  <form>
                    <p className="heading">Register</p>
                      <p className="sub-heading">Student Details</p>
                      <div>
                          <input type="text"
                                 id="student_first_name"
                                 placeholder="First name"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fieldsA"
                          />
                          <input type="text"
                                 id="student_last_name"
                                 placeholder="Last name"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fieldsB"
                          />
                      </div>
                      <div>
                          <input type="text"
                                 id="student_dob"
                                 placeholder="Date of birth"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fieldsA"
                          />
                          <input type="text"
                                 id="student_gender"
                                 placeholder="Gender"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fieldsB"
                          />
                      </div>
                      <div>
                          <input type="text"
                                 id="primary_instrument"
                                 placeholder="Instrument"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fieldsA"
                          />
                          <input type="text"
                                 id="experience"
                                 placeholder="Experience"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fieldsB"
                          />
                      </div>
                      <div>
                          <select id="primary_learning_location"
                                  default="Primary Learning Locations"
                                  onChange={this.handleInputChange}
                                  className="dropdown">
                              <option value="" disabled selected>Select Learning Location</option>
                              {locOptions}
                          </select>
                      </div>

                      <p className="sub-heading">Contact Details</p>
                       Primary Contact:
                       <br/>
                      <div>
                          <input type="text"
                                 id="primary_contact_first_name"
                                 placeholder="First name"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fieldsA"
                          />
                          <input type="text"
                                 id="primary_contact_last_name"
                                 placeholder="Last name"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fieldsB"
                          />
                      </div>
                      <div>
                          <input type="text"
                                 id="primary_contact_number"
                                 placeholder="Contact number"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fieldsA"
                          />
                          <input type="text"
                                 id="email"
                                 placeholder="Contact Email"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fieldsB"
                          />
                      </div>


                      Address:
                      <br/>
                      <div>
                          <input type="text"
                                 id="address_1"
                                 placeholder="Line 1"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fields"
                          />
                      </div>
                      <div>
                          <input type="text"
                                 id="address_2"
                                 placeholder="Line 2"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fields"
                          />
                      </div>
                      <div>
                          <input type="text"
                                 id="address_3"
                                 placeholder="Suburb"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fields"
                          />
                          <input type="text"
                                 id="address_4"
                                 placeholder="State"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fields"
                          />
                          <input type="text"
                                 id="address_5"
                                 placeholder="Post Code"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fields"
                          />
                      </div>
                      <div>
                          <input type="text"
                                 id="username"
                                 placeholder="Username"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fields"
                          />
                          <input type="text"
                                 id="password"
                                 placeholder="Password"
                                 onChange={this.handleInputChange}
                                 className="rg-form-fields"
                          />
                      </div>

                      { error && <p>{ error }</p>}
                      { message && <p>{ message }</p>}

                    <button type="submit" className="button" onClick={this.submitForm}>Register</button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default RegisterForm;
