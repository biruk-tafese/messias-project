import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedContent from './AnimatedContent';
import './blogs.css';
import img from '../Images/OurBlos.jpg';

const truncateDescription = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

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
                <img src={img} alt={blog.title} />
              </div>
              <h5 className='card-title'>{blog.title}</h5>
              <p className='card-text'>{truncateDescription(blog.content, 200)}</p>
              <Link to={`/Blogdetails/${blog.id}`} className='btn'>
                Read more
              </Link>
            </div>
          ))}
        </div>
      </AnimatedContent>
      {/* <Footer /> */}
    </>
  );
}
