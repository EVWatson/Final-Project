import React, { Component } from 'react';
import axios from 'axios';
import '../Lessons.css';
import '../Responsive.css';
import '../App.css';
import '../Headings.css';

import music from '../music.png';
import MainNav from './MainNav';

axios.defaults.withCredentials = true;

class Lessons extends Component {
    state = {
            bio: {},
            locations: []
        }

    componentDidMount() {
      axios.get(process.env.REACT_APP_API_URL + "/admin-bio")
        .then(resp => {
          this.setState({bio: resp.data})
        })

      axios.get(process.env.REACT_APP_API_URL + "/locations")
        .then(resp => {
          this.setState({locations: resp.data})
        })
    }

  render() {
    return (
        <div className="wrapper">
            <MainNav />
            <div className="container">
                <div className="lsn">

                    <div className="lessons">
                        <p className="main-sub-heading center-header ">Music Lessons</p>
                        <p className="bio-text">{this.state.bio.lessons}</p>
                    </div>

                    <img src={music}  className="music-pic"  id="lessons" alt="Music Signs"/>

                    <div className="location">
                        <p className="sub-heading">Teaching Locations</p>

                        <table className="loc-table">
                            <tbody>
                                <tr>
                                    <td><b>No:</b></td>
                                    <td><b>Location</b></td>
                                    <td><b>Address</b></td>
                                </tr>

                                {this.state.locations.map((loc, i) =>
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{loc.name}</td>
                                        <td>{loc.address}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="rates">
                        <p className="sub-heading">Rates and Payment</p>
                        <p className="bio-text">{this.state.bio.ratesPayment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Lessons;
