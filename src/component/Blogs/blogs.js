// Blog.js
import SimpleSlider from './slider'; // Assuming your file is named Slider.js
import './blog.css';
import AnimatedContent from '../../Pages/AnimatedContent';

function Blog() {
  return (
    <>
       <AnimatedContent>
      <div className="parent">
        <div className="page-wrapper">
          <div className='post-slider'>
            <h1 className='slider-title'>Our Blogs</h1>
            <div className='post-wrapper'>
              <SimpleSlider />
            </div>
          </div>
        </div>
      </div>
      </AnimatedContent>
    </>
  );
}

export default Blog;
