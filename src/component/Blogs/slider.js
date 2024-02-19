import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
  const navigate = useNavigate();

  const handleSlideClick = () => {
    // Navigate to the blogdetails page with the corresponding blogId
    navigate(`/blog/`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 850, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="card" onClick={handleSlideClick}><h5 className="header">Visit Our Blogs</h5></div>
      <div className="card" onClick={handleSlideClick}><h5 className="header">Visit Our Blogs</h5></div>
      <div className="card" onClick={handleSlideClick}><h5 className="header">Visit Our Blogs</h5></div>
      <div className="card" onClick={handleSlideClick}><h5 className="header">Visit Our Blogs</h5></div>
    </Slider>
  );
}
