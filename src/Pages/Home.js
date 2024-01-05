import NavBar from '../component/NavBar/navBar';
import Blog from   '../component/Blogs/blogs';
import Home from   '../component/Home/home';
import Card from   '../component/Card/cards';
import Register from '../component/BlogRegister/register';

export default function HomePage(){
    return(
        <>   
    <NavBar/>
    <Home/>
    <Card/>
    <Blog/>
    <Register/>            
        </>
    )
}