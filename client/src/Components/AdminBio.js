import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import biostyles from '../AdminBio.css';
import '../Responsive.css';
import MainNav from './MainNav';

axios.defaults.withCredentials = true;

class AdminBio extends Component {
  state = {bio: {}}

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "/admin-bio")
      .then(resp => {
        this.setState({bio: resp.data})
      })
    
  }

  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    const { bio } = this.state;
    console.log(value)
    bio[id] = value;
    this.setState({ bio });
}

  handleEditClick = (e) => {
    e.preventDefault();

    const {
      about,
      qualifications,
      teachingPhilosophy,
      lessons,
      ratesPayment,
      policies,
      phone,
      email
    } = this.state.bio

    const data = {
      photo: '',
      about,
      qualifications,
      teachingPhilosophy,
      lessons,
      ratesPayment,
      policies,
      phone,
      email
    }

    axios.put(process.env.REACT_APP_API_URL + "/protected/admin-bio/update", data)
        .then(resp => { 
            this.setState({bio: resp.data})
        })
  }

  render() {
    return (
      <div className="wrapper">
        <MainNav />
        <div className={biostyles.container}>
            <div className="admin-bioedit">  

                <div className="adminbio-hdr"><p>Website Content</p></div>
                <form className="bio-form">
                    <label for='about' className="bioform-label">About: </label>
                    <textarea 
                        id="about"
                        value={this.state.bio.about}
                        onChange={this.handleInputChange}
                        
                    /><br/>

                    <label for='qualifications' className="bioform-label">Qualifications: </label>
                    <textarea
                        id="qualifications"
                        value={this.state.bio.qualifications}
                        onChange={this.handleInputChange}
                    /><br/>

                    <label for='teachingPhilosophy' className="bioform-label">Philosophy: </label>
                    <textarea
                        id="teachingPhilosophy"
                        value={this.state.bio.teachingPhilosophy}
                        onChange={this.handleInputChange}
                    /><br/>

                    <label for='lessons' className="bioform-label">Lessons: </label>
                    <textarea
                        id="lessons"
                        value={this.state.bio.lessons}
                        onChange={this.handleInputChange}
                    /><br/>

                    <label for='ratesPayment' className="bioform-label">Rates: </label>
                    <textarea
                        id="ratesPayment"
                        value={this.state.bio.ratesPayment}
                        onChange={this.handleInputChange}
                    /><br/>

                    <label for='policies' className="bioform-label">Policies: </label>
                    <textarea
                        id="policies"
                        value={this.state.bio.policies}
                        onChange={this.handleInputChange}
                    /><br/> 

                    <label for='phone' className="bioform-label">Phone: </label>
                    <input type="text"
                        id="phone"
                        value={this.state.bio.phone}
                        onChange={this.handleInputChange}
                    /><br/>

                    <label for='email' className="bioform-label">Email: </label>
                    <input type="text"
                        id="email"
                        value={this.state.bio.email}
                        onChange={this.handleInputChange}
                    /><br/>
                           
                    <button onClick={this.handleEditClick} className="editbio-btn">Update</button>
                </form>
            </div>
        </div>
      </div>

    );
  }
}


export default AdminBio;
