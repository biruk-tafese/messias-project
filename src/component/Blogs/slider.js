import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import blogs from "../../Pages/blogsData";

export default function SimpleSlider() {
  const navigate = useNavigate();

  const handleSlideClick = (blogId) => {
    // Navigate to the blogdetails page with the corresponding blogId
    navigate(`/blogdetails/${blogId}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {blogs.blogList.map(blog => (
        <div key={blog.id} className="card" onClick={() => handleSlideClick(blog.id)}>
          <h3>{blog.title}</h3>
        </div>
      ))}
    </Slider>
  );
}
