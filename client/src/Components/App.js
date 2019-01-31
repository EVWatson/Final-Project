import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import MainNav from './MainNav';
import DropNav from './DropNav';
import IndexPage from './IndexPage';


class App extends Component {
  state = {
    bio: {},
    locations: []
    
  }


  componentDidMount() {
    
    axios.get("http://localhost:5001/protected/admin-bio")
      .then(resp => {
        this.setState({bio: resp.data})
      })

    this.getLocationData()
  }

  getLocationData = () => {
    axios.get("http://localhost:5001/protected/locations")
    .then(resp => {
      this.setState({locations: resp.data})
    })
  }

  render() {
      return (
        <div className="wrapper" id="home">
          <MainNav locations={this.state.locations} />
          <div className="container">
            <IndexPage bio={this.state.bio} locations={this.state.locations}/>
          </div>
        </div>
      )
  }
}

export default App;
