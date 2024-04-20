import { BsMailboxFlag, BsFillTelephoneFill} from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import './footer.css'

export default function Footer(){

    return(
        <>
        <div className="conta">
                <div className="disc">
                    <h1>Messia's Mission Ministry Ethiopia</h1>
                </div>
      
                <div className="address">
                <div className='contact-info'>
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
        </div>  
             </div>
        </div>
        </>
    )
}