
import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from './blogsData';
import './Blogdetails.css'; 
import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "../component/Footer/footer";
import Comment from "../component/comment/comment";

const Blogdetails = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.005
  });

  const { blogId } = useParams();
  const blog = blogs.blogList.find((blog) => blog.id === parseInt(blogId, 10));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Split the description into paragraphs based on line breaks
  const paragraphs = blog.description.split('\n').map((paragraph, index) => (
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
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="blog-details-content">{paragraphs}</div>
      <p className="blog-author">Written by {blog.author} | Updated on {blog.dateUpdated}</p>
    </div>

       <Comment />
       <Footer />
    </>
  );
};

export default Blogdetails;
