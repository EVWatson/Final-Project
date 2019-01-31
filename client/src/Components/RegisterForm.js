import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import '../App.css';

class RegisterForm extends Component {
    state = {
        redirectToNewPage: false
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

    
        const url = "http://localhost:5001/users/new"
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
                this.setState({ redirectToNewPage: true })         
            })
            .catch(err => {
                const { status } = err.response
                if (status === 406){
                    this.setState({error: 'Please enter username and password', message: undefined})
                }
            })
    }

    getLocData = () => {
        const locations = this.props.location.state.locations
        return (
            locations.map(loc =>{ 
               return <option value={loc.name}>{loc.name}</option>
            })            
        )
    }

    render() {
        const locOptions = this.getLocData()

        
        if (this.state.redirectToNewPage) {
            return (
                <Redirect to="/myProfile" />
            )
        }

        const { error, message } = this.state
        return (
            <div className="register-form">
                <p className="sub-heading">Register</p>

                <form>
                    <p className="sub-heading">Student Details</p>
                    <div>
                        <input type="text" 
                               id="student_first_name" 
                               placeholder="Student first name" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
                        />                   
                        <input type="text" 
                               id="student_last_name" 
                               placeholder="Student last name" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
                        />
                    </div>
                    <div>
                        <input type="text" 
                               id="student_dob" 
                               placeholder="Student date of birth" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
                        />
                        <input type="text" 
                               id="student_gender" 
                               placeholder="Student gender" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
                        />
                    </div>
                    <div>
                        <input type="text" 
                               id="email" 
                               placeholder="Contact Email" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
                        />
                        <select id="primary_learning_location" 
                                default="Primary Learning Locations"
                                onChange={this.handleInputChange} 
                                className="rg-form-fields">
                            <option value="" disabled selected>Choose Learning Location</option>
                            {locOptions}
                        </select>

                    </div>
                    <div>
                        <input type="text" 
                               id="primary_instrument" 
                               placeholder="Instrument" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
                        />
                        <input type="text" 
                               id="experience" 
                               placeholder="Experience" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
                        />
                    </div>                    
                    <div>
                        <input type="text" 
                               id="parent_first_name" 
                               placeholder="Parent first name" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
                        />                   
                        <input type="text" 
                               id="parent_last_name" 
                               placeholder="Parent last name" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
                        />
                    </div>

                    <p className="sub-heading">Contact Details</p>
                    <div>
                        <input type="text" 
                               id="primary_contact_first_name" 
                               placeholder="Primary contact first name" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
                        />                   
                        <input type="text" 
                               id="primary_contact_last_name" 
                               placeholder="Primary contact last name" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
                        />
                    </div>
                    <div>
                        <input type="text" 
                               id="primary_contact_number" 
                               placeholder="Primary contact number" 
                               onChange={this.handleInputChange} 
                               className="rg-form-fields"
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
                    
                    <button type="submit" onClick={this.submitForm}>Register</button>
                </form>

            </div> 
        );
    }
}

export default RegisterForm;
