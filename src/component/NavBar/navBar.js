import {NavLink, Link } from 'react-router-dom';

import './navBar.css'

function NavBar(){
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <nav className="nav">
            <h2 className='logo'>Messia's Mission Ministry</h2>
            <div className='menu'>
                <i className="fa fa-bars"></i>
            </div>
                 <ul className='ul'>
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/ministry'>Ministry</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>  
                    <li><NavLink to='/blog'>Blogs</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    <li><NavLink to='/donate'>Donate</NavLink></li>
                 </ul>
            </nav>
        </>
    );
}

export default NavBar