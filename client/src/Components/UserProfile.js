import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import MainNav from './MainNav';
import DropNav from './DropNav';
import IndexPage from './IndexPage';


class UserProfile extends Component {
  state = {
    bio: {},
    locations: []
    
  }


//   componentDidMount() {    
//     getLocationData = () => {
//         axios.get("http://localhost:5001/protected/locations")
//         .then(resp => {
//         this.setState({locations: resp.data})
//         })
//   }
  

  render() {
      return (
        <div className="wrapper" id="home">
          <MainNav locations={this.state.locations} />
          <div className="container">
            
          </div>
        </div>
      )
  }
}

export default UserProfile;
