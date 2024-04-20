import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedContent from './AnimatedContent';
import './blogs.css';
import shabatImg from '../Images/minstries/shabatworship1.jpg';
import Footer from '../component/Footer/footer';


export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const BASE_URL = 'http://127.0.0.1:8000'; // Replace this with your actual backend URL

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blogs/blogslist`);
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

  return (
    <>
      <div className='blogs-logo'>
        <AnimatedContent>
          <h5 className='blogs'>Our Blogs</h5>
        </AnimatedContent>
      </div>
      <AnimatedContent>
        <div className='card-row'>
          {blogs.map((blog) => (
            <div className='card-container' key={blog.id}>
              <div className='image-card'>
             <img src={shabatImg} alt={blog.title} />
              
              </div>
              <h5 className='card-title'>{blog.title}</h5>
              <Link to={`/Blogdetails/${blog.id}`} className='btn'>
                Read more
              </Link>
            </div>
          ))}
          <Footer />
        </div>
      </AnimatedContent>
     
    </>
  );
}