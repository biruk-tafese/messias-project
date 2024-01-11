import Blog from   '../component/Blogs/blogs';
import Home from   '../component/Home/home';
import Card from   '../component/Card/cards';
import Register from '../component/BlogRegister/register';
import Footer from '../component/Footer/footer';

export default function HomePage(){
    return(
        <>   
    
    <Home/>
    <Card/>
    <Blog/>
    <Register/>
    <Footer/>          
        </>
    )
}