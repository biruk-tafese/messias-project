import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navBar.css';

function NavBar() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <>
            <div className={`nav`}>
                <h2 className='logo'>Messia's Mission Ministry</h2>
                <nav>
                    <ul className={`ul ${showNav ? 'show' : ''}`}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/ministry'>Ministry</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li><Link to='/donate'>Donate</Link></li>
                    </ul>
                    <button className="btn-collapse" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
