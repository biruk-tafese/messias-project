import {Routes, Route } from 'react-router-dom';

import HomePage from './Pages/Home';
import About from './Pages/About';
import BlogPage from './Pages/Blog';
import Contact from './Pages/Contact';
import Ministry from './Pages/Ministries';
import Donate from './Pages/Donate';
import NavBar from './component/NavBar/navBar';


function App() {
  return (
    <>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <NavBar/>
    <Routes>
     
     <Route path='/' element={<HomePage/>}/>

     <Route path='/about' element={<About/>}/>

     <Route path='/blog' element={<BlogPage/>}/>

     <Route path='/contact' element={<Contact/>}/>

     <Route path='/ministry' element={<Ministry/>}/>

     <Route path='/donate' element={<Donate/>}/>


     </Routes>
    </>
     
    
  );
}

export default App;
