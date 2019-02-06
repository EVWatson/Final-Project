import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import biostyles from '../AdminBio.css';
import '../Responsive.css';
import MainNav from './MainNav';


class AdminBio extends Component {
  state = {bio: {}}

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "/admin-bio")
      .then(resp => {
        this.setState({bio: resp.data})
      })
  }

  handleEditClick = () => {
    const data = {
        photo: String,
      about: String,
      qualifications: String,
      teachingPhilosophy: String,
      lessons: String,
      ratesPayment: String,
      policies: String,
      phone: String,
      email: String
    }
    axios.get(process.env.REACT_APP_API_URL + "/admin-bio", data)
    .then(resp => {
      this.setState({bio: resp.data})
    })
  }

  render() {
    return (
      <div className="wrapper">
        <MainNav />
        <div className={biostyles.container}>
            <div className="adminbio">               
                <div className="bio-hdr"><p>Website Content</p></div>
                <form className="bio-form">
                    <input type="text"
                        id="about"
                        placeholder={this.state.bio.about}
                        onChange={this.handleInputChange}
                        // className="rg-form-fieldsA fieldsize"
                    />
                    <input type="text"
                        id="qualifications"
                        placeholder={this.state.bio.qualifications}
                        onChange={this.handleInputChange}
                        // className="rg-form-fieldsA fieldsize"
                    />
                    <input type="text"
                        id="philosophy"
                        placeholder={this.state.bio.philosophy}
                        onChange={this.handleInputChange}
                        // className="rg-form-fieldsA fieldsize"
                    />
                {/* <div className="about" id="about">
                    <p className="sub-heading">About Me</p>
                    <p className="bio-text">{this.state.bio.about}</p>
                </div>       

                <div className="qualifications">
                    <p className="sub-heading">Qualifications</p>
                    <p className="bio-text">{this.state.bio.qualifications}</p>
                </div> 

                <div className="philosophy">
                    <p className="sub-heading">Teaching Philosophy</p>
                    <p className="bio-text">{this.state.bio.teachingPhilosophy}</p>
                </div>   

                <div className="lessons">
                    <p className="sub-heading">Music Lessons</p>
                    <p className="bio-text">{this.state.bio.lessons}</p>
                </div>  

                <div className="rates">
                    <p className="sub-heading">Rates and Payment</p>
                    <p className="bio-text">{this.state.bio.ratesPayment}</p>
                </div>

                <div className="policies">
                    <p className="sub-heading">Policies</p>
                    <p className="bio-text">{this.state.bio.policies}</p>
                </div>                 
                 */}
                <button onClick={this.handleEditClick} className="editbio-btn">Edit</button>
                </form>
            </div>
        </div>
      </div>

    );
  }
}


export default AdminBio;
