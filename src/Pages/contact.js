// import NavBar from '../component/NavBar/navBar';
import { BsMailboxFlag, BsFillTelephoneFill} from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";
import { useNavigate  } from 'react-router-dom';
import Footer from '../component/Footer/footer';
import './contact.css';
import AnimatedContent from "./AnimatedContent";


export default function Contact(){

   const navigate = useNavigate ();

   const handleReadMoreClick = () => {
       // Navigate to the "/another-page" route
       navigate('/Donate');
     };
   
    return(
        <>
        <AnimatedContent>
        <h1 className='title'>Contact with MESSIAS</h1>
        </AnimatedContent>
         <div className='infocontainer'>
          <AnimatedContent>
            <div className='address-info'>
                  <ul>
                     <lu><h2 className='ourAdd1'>Our address</h2></lu>
                     <li>Arada Sub City, Wereda-7, Kebele-10 House Number</li>
                     <li>Kebele-10 House Number 046</li>
                  </ul>
                  <ul>
                     <h2  className='ourAdd2'>Office Hour</h2>
                     <li>Mon-Fri 9:30 am - 5:00 pm</li>
                     <li>Sa-Sun Closed</li>
                  </ul>
            </div>
             </AnimatedContent>
          <div className='contact-info'>
           <AnimatedContent>
            <ul>
             <h2 className='ourAdd3'>Contact Info</h2>
             <li className="contact-item">
                <div className="icon-description">
                  <BsMailboxFlag style={{  fontSize: '20px' }} className='icons'/>
                    <span>P.O.Box: 34354 Addis Ababa, Ethiopia Kebele-10 House Number 04</span>
                  </div>
               </li>
               <li className="contact-item">
                  <div className="icon-description">
                    <BsFillTelephoneFill style={{fontSize: '20px' }} className='icons'/>
                      <a href="tel:+251118333094">+251118333094</a>
                  </div>
               </li>
               <li className="contact-item">
                 <div className="icon-description">
                    <MdOutlineMail style={{  fontSize: '20px' }} className='icons' />
                      <a href="mailto:info@messias.net">Email: info@messias.net</a>
                   </div>
                </li>
            </ul>
            </AnimatedContent>
        </div>  
            <div className='person-info'>
            <AnimatedContent>
                 <ul>
                     <h2 className='ourAdd3'>Messia's Is Represented In The USA, With Its Messias Alumni</h2>
                     <li>Non-Profit Organization</li>
                     <li className="contact-item">
                           <div className="icon-description">
                           <TbNetwork  style={{fontSize: '20px' }} className='icons'/>
                           
                           <a href="https://www.messiasministries.org/">https://www.messiasministries.org/</a>
                       </div>
                     </li>
                       
                  </ul>
               </AnimatedContent>
            </div>

            <div className='contact-info'>
             <AnimatedContent>
            <ul>
             <h2 className='ourAdd3'>Contact Person</h2>
             <li className="contact-item">
                <div className="icon-description">
                  <IoPerson style={{ fontSize: '20px' }} className='icons'/>
                    <span>Yabisra Nigussie</span>
                  </div>
               </li>
               <li className="contact-item">
                  <div className="icon-description">
                    <BsFillTelephoneFill style={{ fontSize: '20px' }} className='icons' />
                      <a href="tel:+251118333094">+251118333094</a>
                  </div>
               </li>
               <li className="contact-item">
                 <div className="icon-description">
                    <MdOutlineMail style={{ fontSize: '20px' }} className='icons' />
                     P.O.Box, 2323
                   </div>
                </li>
                <li className="contact-item">
                 <div className="icon-description">
                    <MdOutlineMail style={{ fontSize: '20px' }} className='icons'/>
                      <a href="mailto:info@messias.net">partnership.catalyst@messias.net</a>
                   </div>
                </li>
                <li className="contact-item">
                 <div className="icon-description">
                    <GrLocationPin style={{ fontSize: '20px' }} className='icons'/>
                      Jerusalem, Israel.
                   </div>
                </li>
            </ul>
            </AnimatedContent>
        </div>  
         </div>  
        
        
          {/* Section two of the page  */}
           <AnimatedContent>

           <div className='container-two'>
                 <h1>Support Messias</h1>
                 <div className='SupportBtn'>
                     <button onClick={handleReadMoreClick}>Volunteer</button>

                 </div>
           </div>
           </AnimatedContent>

            {/* Section Three of the page  */}
            <AnimatedContent>

            <div class='container-three'>
              <h1 class='titleContact'>Contact Us</h1>
           <form class='contact-form'>
             <div class='input-fields'>
               <div class='names'>
                 <input class='fname' placeholder='First Name' required/>
                 <input class='lname' placeholder='Last Name' required/>
             </div>
              <div class='email-phone'>
                 <input class='email' type='email' placeholder='Email' required/>
                 <input class='phoneNum' type='tel' placeholder='Phone Number'/>
              </div>
               <textarea placeholder='Your message'></textarea>
            </div>
            <button type='submit'>Submit</button>
         </form>
       </div>
       </AnimatedContent>
       <Footer />
            
        </>
    )
}
