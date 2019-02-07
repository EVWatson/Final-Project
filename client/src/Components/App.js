import React, { Component } from 'react';
import axios from 'axios';
import '../Headings.css';
import '../App.css';
import MainNav from './MainNav';
// import DropNav from './DropNav';
import IndexPage from './IndexPage';

axios.defaults.withCredentials = true;

class App extends Component {
  state = {
    bio: {},
    locations: []

  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "/admin-bio")
      .then(resp => {
        this.setState({bio: resp.data})
      })

    this.getLocationData()
  }

  getLocationData = () => {
    axios.get(process.env.REACT_APP_API_URL + "/locations")
    .then(resp => {
      this.setState({locations: resp.data})
    })
  }

  render() {
      return (
        <div className="wrapper" id="home">
          <MainNav />
          <IndexPage bio={this.state.bio} locations={this.state.locations}/>
        </div>
      )
  }
}

export default App;
