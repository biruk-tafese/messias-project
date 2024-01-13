
import React from 'react';
import { Link } from 'react-router-dom';
import blogs from './blogsData';
import Footer from '../component/Footer/footer';

import './blogs.css';

const truncateDescription = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

export default function BlogPage() {
  return (
    <>  
      <div className='blogs-logo'>
        <h5 className='blogs'>Our Blogs</h5>
      </div>
      <div className='card-row'>
        {blogs.blogList.map((blog) => (
          <div className='card-container' key={blog.id}>
            <div className='image-card'>
              <img src={blog.image} alt={blog.title} />
            </div>
            <h5 className='card-title'>{blog.title}</h5>
            <p className='card-text'>{truncateDescription(blog.description, 200)}</p>
            <Link to={`/Blogdetails/${blog.id}`} className='btn'>
              Read more
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
