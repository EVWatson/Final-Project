import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import '../Responsive.css';
import music from '../music.png';
import MainNav from './MainNav';



class Lessons extends Component {
    state = {
            bio: {},
            locations: []
        }

    componentDidMount() {    
      axios.get("http://localhost:5001/protected/admin-bio")
        .then(resp => {
          this.setState({bio: resp.data})
        })

        axios.get("http://localhost:5001/protected/locations")
        .then(resp => {
          this.setState({locations: resp.data})
        })
    }
  render() {
    return (

      <>
        {/* <div className="wrapper" id="home"> */}
        <MainNav />
        <div className="container">
        <div className="idx"> 
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
     
     </>      
    )
  }
}

export default Lessons;
