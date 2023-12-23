import './navBar.css'

function NavBar(){
    return(
        <>
        <div className="nav">
            <h2 className='logo'>Messia's Mission Ministry</h2>
            <nav>
                 <ul className='ul'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Ministry</a></li>
                    <li><a href="#">About</a></li>  
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Donate</a></li>
                 </ul>
            </nav>
        </div>
        </>
    );
}

export default NavBar