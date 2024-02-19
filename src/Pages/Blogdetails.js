import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Blogdetails.css'; 
import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "../component/Footer/footer";
import Comment from "../component/comment/comment";
import img from '../Images/OurBlos.jpg'

const Blogdetails = () => {
  const [blogs, setBlogs] = useState([]);
  const { blogId } = useParams();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.005
  });

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

  // Ensure that blogs has been fetched and is not undefined
  if (blogs === undefined || blogs.length === 0) {
    return <div>Loading...</div>; // You can display a loading indicator while fetching data
  }

  // Find the blog with the specified blogId
  const blog = blogs.find((blog) => blog.id === parseInt(blogId, 10));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Split the description into paragraphs based on line breaks
  const paragraphs = blog.content.split('\n').map((paragraph, index) => (
    <p key={index} className="blog-paragraph">
      {paragraph}
    </p>
  ));

  return (
    <>
      <div className="blog-details-container">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <h2>{blog.title}</h2>
        <div className="blog-image">
          <img src={img} alt={blog.title} />
        </div>
        <div className="blog-details-content">{paragraphs}</div>
        <p className="blog-author">Written by {blog.author}</p>
      </div>

      <Comment />
      <Footer />
    </>
  );
};

export default Blogdetails;
