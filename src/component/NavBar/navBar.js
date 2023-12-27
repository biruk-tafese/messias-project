import { Link } from 'react-router-dom';

import './navBar.css'

function NavBar(){
    return(
        <>
        <div className="nav">
            <h2 className='logo'>Messia's Mission Ministry</h2>
            <nav>
                 <ul className='ul'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/ministry'>Ministry</Link></li>
                    <li><Link to='/about'>About</Link></li>  
                    <li><Link to='/blog'>Blogs</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/donate'>Donate</Link></li>
                 </ul>
            </nav>
        </div>
        </>
    );
}

export default NavBar