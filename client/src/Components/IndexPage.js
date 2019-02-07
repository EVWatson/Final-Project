import React, { Component } from 'react';
import '../Responsive.css';
import idxstyles from '../App.css';
import lilla from '../lilla.jpg';


class IndexPage extends Component {
    
  render() {
    return (
        <div className={idxstyles.container}>
    
            <div className="idx">     
                    <img src={lilla}  className="lilla-pic" alt="Lilla"/>

                    <div className="about" id="about">
                        <p className="main-sub-heading">About Lilla</p>
                        <p className="bio-text">{this.props.bio.about}</p>
                    </div>       

                    <div className="qualifications">
                        <p className="sub-heading">Qualifications</p>
                        <p className="bio-text">{this.props.bio.qualifications}</p>
                    </div> 

                    <div className="philosophy">
                        <p className="sub-heading">Teaching Philosophy</p>
                        <p className="bio-text">{this.props.bio.teachingPhilosophy}</p>
                    </div>           
            </div>
        </div>
    );
  }
}

export default IndexPage;
