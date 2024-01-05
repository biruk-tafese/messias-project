import NavBar from '../component/NavBar/navBar';
import { BsMailboxFlag, BsFillTelephoneFill} from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

import './contact.css';

export default function Contact(){
    return(
        <>
        <NavBar/>
        <h1 className='title'>Contact with Messias</h1>
         <div className='infocontainer'>
            <div className='address-info'>
                  <ul>
                     <lu><h2 className='ourAdd'>Our address</h2></lu>
                     <li>Arada Sub City, Wereda-7,</li>
                     <li>Kebele-10 House Number 046</li>
                  </ul>
                  <ul>
                     <lu><h2 className='ourAdd'>Office Hour</h2></lu>
                     <li>Mon-Fri 9:30 am - 5:00 pm</li>
                     <li>Sa-Sun Closed</li>
                  </ul>
            </div>
            <div className='contact-info'>
                  <ul>
                     <h2 className='ourAdd'>Contact Info</h2>
                     
                     <li><BsMailboxFlag style={{color: 'red', fontSize: '23px', padding:'6px'}} />
                            P.O.Box: 34354 Addis Ababa, Ethiopia Kebele-10 House Number 04
                            </li>
                     <li><BsFillTelephoneFill style={{color: 'red', fontSize: '23px', padding:'6px'}}/> 
                           +251118333094
                        </li>
                      <li>
                         <MdOutlineMail style={{color: 'red', fontSize: '23px', padding:'6px'}}/>
                           Email: info@evasue.net
                      </li>
                  </ul>
            </div>
            <div className='person-info'>
                 <ul>
                     <h2 className='ourAdd'>EvaSUE Is Represented In The USA, With Its EvaSUE Alumni</h2>
                     <li>Non-Profit Organization</li>
                     <li>Kebele-10 House Number 046</li>
                  </ul>
            </div>
         </div>        
        </>
    )
}