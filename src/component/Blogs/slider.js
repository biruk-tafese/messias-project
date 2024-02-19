import React , {useEffect , useState}from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function SimpleSlider() {
  const navigate = useNavigate();
 
   const [blogs, setBlogs] = useState();
   
    useEffect(() => {
     const fetchBlogs = async () => {
       try {
         const response = await fetch('http://127.0.0.1:8000/blogs/blogslist');
         if (!response.ok) {
           throw new Error('Failed to fetch blogs');
         }
         const data = await response.json();
         setBlogs(data);
         
       } catch (error) {
         console.error('Error fetching blogs:', error);
       }
     };
   
     fetchBlogs();
   }, []);

  const handleSlideClick = (blogId) => {
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
