// import NavBar from '../component/NavBar/navBar';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


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
   const form = useRef();
   const [fname, setFname] = useState();
   const [surename, setSurename] = useState();
   const [email, setEmail] = useState();
   const [phone, setPhone] = useState();
   const [comment, setComment] = useState();


   const handleReadMoreClick = () => {
       // Navigate to the "/another-page" route
       navigate('/Donate');
     };
      
     const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can submit the comment data to your backend or perform any other action
      // For demonstration, we'll just show a confirmation pop-up
      try {
         const serviceId = 'service_bl4j00r'; 
         const templateId = 'template_dm96mir';
         const userId = 'QJrefnFA0TIxch3bj'; 
        
         const confirmation = window.confirm(`Submit the form?`);
         if (confirmation) {

          emailjs.sendForm(serviceId, templateId, form.current, userId)
             .then((result) => {
                 window.alert('Your Conact sent successfully');
                 // Clear form fields after submission
                 setFname('');
                 setEmail('');
                 setComment('');
                 setSurename('');
                 setPhone('');
             })
             .catch((error) => {
                 window.alert('Something went wrong! please try later.');
             });
         }
     } catch (error) {
         console.error('Error:', error);
     }
   
}

   
    return(
        <>
        <AnimatedContent>
        <h1 className='title'>Contact with MESSIAH</h1>
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
                      <a href="mailto:belay08@gmail.com">Email: belay08@gmail.com</a>
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
                           
                           <a href=" https://www.ethiopiajudaica.org"> www.ethiopiajudaica.org/</a>
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
                    <span>DANIEL BELAY</span>
                  </div>
               </li>
               <li className="contact-item">
                  <div className="icon-description">
                    <BsFillTelephoneFill style={{ fontSize: '20px' }} className='icons' />
                      <a href="tel:+251118333094">++251 911864323</a>
                  </div>
               </li>
               <li className="contact-item">
                 <div className="icon-description">
                    <MdOutlineMail style={{ fontSize: '20px' }} className='icons' />
                     P.O.Box, 4941 
                   </div>
                </li>
                <li className="contact-item">
                 <div className="icon-description">
                    <MdOutlineMail style={{ fontSize: '20px' }} className='icons'/>
                      <a href="mailto:belay08@gmail.com">belay08@gmail.com</a>
                   </div>
                </li>
                <li className="contact-item">
                 <div className="icon-description">
                    <GrLocationPin style={{ fontSize: '20px' }} className='icons'/>
                    Addis Ababa, Ethiopia.
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
           <form ref = {form} class='contact-form' onSubmit={handleSubmit}>
             <div class='input-fields'>
               <div class='names'>
                 <input 
                    class='fname' 
                    placeholder='First Name' 
                    name='fname'
                    value={fname}
                    onChange={(e)=> setFname(e.target.value)}
                    required/>
                 <input
                 class='surename' 
                 placeholder='Last Name' 
                 name='surename'
                 value={surename}
                 onChange={(e)=>{setSurename(e.target.value)}}
                 required/>
             </div>
              <div class='email-phone'>
              <input
                        id="email"
                        placeholder="Email *"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                 <input 
                  class='phoneNum'
                  type='tel' 
                  placeholder='Phone Number'
                  name="phone"
                  value={phone}
                  onChange={(e)=>{setPhone(e.target.value)}}

                  />
              </div>
               <textarea 
                 placeholder='Your message'
                 id="message"
                 name="comment"
                 col= '45'
                 rows={8}
                 maxLength={65525}
                 value={comment}
                 onChange={(e)=>{setComment(e.target.value)}}
                 ></textarea>
            </div>
            <button type='submit'>Submit</button>
         </form>
       </div>
       </AnimatedContent>
       <Footer />
            
        </>
    )
}
