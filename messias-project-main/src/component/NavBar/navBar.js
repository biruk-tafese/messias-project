import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navBar.css';

function NavBar() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    const closeNav = () => {
        setShowNav(false);
    };

    useEffect(() => {
        document.body.addEventListener('click', closeNav);
        return () => {
            document.body.removeEventListener('click', closeNav);
        };
    }, []);

    const handleNavClick = (e) => {
        e.stopPropagation(); // Prevents the body click event from being triggered
    };

    const handleLinkClick = () => {
        closeNav(); // Close the navigation bar when a link is clicked
    };

    return (
        <>
            <div className={`nav`} onClick={handleNavClick}>
                <h2 className='logo'>Messiahnic Mission Ministry</h2>
                <nav>
                    <ul className={`ul ${showNav ? 'show' : ''}`}>
                        <li><Link to='/' onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to='/ministry' onClick={handleLinkClick}>Ministry</Link></li>
                        <li><Link to='/about' onClick={handleLinkClick}>About</Link></li>
                        <li><Link to='/blog' onClick={handleLinkClick}>Blogs</Link></li>
                        <li><Link to='/contact' onClick={handleLinkClick}>Contact Us</Link></li>
                        <li><Link to='/donate' onClick={handleLinkClick}>Donate</Link></li>
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
