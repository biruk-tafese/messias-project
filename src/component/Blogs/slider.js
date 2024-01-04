// Slider.js

import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true, // Set to true for auto-advancing
      autoplaySpeed: 2000, // Adjust the speed in milliseconds
    };
    return (
      <Slider {...settings}>
        <div className="card">
          <h3>1</h3>
        </div>
        <div className="card">
          <h3>2</h3>
        </div>
        <div className="card"> 
          <h3>3</h3>
        </div>
        <div className="card">
          <h3>4</h3>
        </div>
        <div className="card">
          <h3>5</h3>
        </div>
        {/* <div className="card">
          <h3>6</h3>
        </div> */}
      </Slider>
    );
  }
}
