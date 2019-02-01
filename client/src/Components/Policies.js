import React, { Component } from 'react';

import '../App.css';
import '../Responsive.css';




class Policies extends Component {
    
  render() {
    // const user = localStorage.getItem('user')
    return (
      <>
        <div className="policies" id="policies">
            <p className="main-sub-heading center-header">Policies</p>
            <p className="bio-text">{this.props.bio.policies}</p>
        </div>
      </>      
    );
  }
}

export default Policies;
