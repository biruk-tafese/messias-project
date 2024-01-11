import './blogs.css';
import blosImage from '../Images/OurBlos.jpg';

export default function BlogPage() {
  return (
    <>
      
        <div className='blogs-logo'>
            <h5 className='blogs'>Our Blogs</h5>
        </div>
        <div className='card-row'>
        <div className='card-container'>
         <div className='image-card'>
            <img src={blosImage} alt=''/>
         </div>
          <h5 className='card-title'>Card Title</h5>
          <p className='card-text'>Line 19:21:  The href attribute is required for an anchor to be keyboard
           accessible. Provide a valid, navigable address as the href value. If you cannot provide an href,
            but still need the element to resemble a link, use a button and change it with appropriate styles. 
            Learn more: https://github.com/jsx-eslint/eslint-
          plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>

          <button className='btn'>read more</button>

        </div>


        {/* --------------------------------- */}
        <div className='card-container'>
         <div className='image-card'>
            <img src={blosImage} alt=''/>
         </div>
          <h5 className='card-title'>Card Title</h5>
          <p className='card-text'>Line 19:21:  The href attribute is required for an anchor to be keyboard
           accessible. Provide a valid, navigable address as the href value. If you cannot provide an href,
            but still need the element to resemble a link, use a button and change it with appropriate styles. 
            Learn more: https://github.com/jsx-eslint/eslint-
          plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>

          <button className='btn'>read more</button>

        </div>

        {/* ----------------- */}
        <div className='card-container'>
         <div className='image-card'>
            <img src={blosImage} alt=''/>
         </div>
          <h5 className='card-title'>Card Title</h5>
          <p className='card-text'>Line 19:21:  The href attribute is required for an anchor to be keyboard
           accessible. Provide a valid, navigable address as the href value. If you cannot provide an href,
            but still need the element to resemble a link, use a button and change it with appropriate styles. 
            Learn more: https://github.com/jsx-eslint/eslint-
          plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>

          <button className='btn'>read more</button>

        </div>
        </div>

     </>
  );
}
