import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import slide1 from './../images/slide_11.jpg';
import slide2 from './../images/slide_19.jpg';
import slide3 from './../images/slide_13.jpg';
import slide4 from './../images/slide_18.jpg';

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators:false,
    arrows: false
  }

class Slidebar extends Component {
  render() {
    return (
      <div id="home" className="Slidebar">
        <Slide {...properties}>
          <div className="each-slide">
            <div className="bg" style={{backgroundImage: `url(${slide1})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className="bg" style={{'backgroundImage': `url(${slide2})`}}>
              <p id="title">Change The Experience of Bathing</p>
            </div>
          </div>
          <div className="each-slide">
            <div className="bg" style={{'backgroundImage': `url(${slide3})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className="bg" style={{'backgroundImage': `url(${slide4})`}}>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default Slidebar;

 
