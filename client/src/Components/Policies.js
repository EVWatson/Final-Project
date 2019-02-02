import React, { Component } from 'react';
import axios from 'axios';
import plcstyles from '../Policies.css';
import '../App.css';
import '../Responsive.css';
import MainNav from './MainNav';


class Policies extends Component {
  state = {
    bio: {}
  }

  componentDidMount() {    
  axios.get("http://localhost:5001/protected/admin-bio")
    .then(resp => {
      this.setState({bio: resp.data})
    })
  }
    
  render() {
    // const user = localStorage.getItem('user')
    return (

      <div className="wrapper">
          <MainNav />
          <div className={plcstyles.container}>
              {/* <div className="pol"> */}
                <div className="policies" id="policies">
                    <p className="main-sub-heading center-header">Policies</p>
                    <p className="bio-text">{this.state.bio.policies}</p>
                </div>  
              {/* </div> */}
          </div>
      </div>      
    );
  }
}

export default Policies;