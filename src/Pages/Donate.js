import "./Donate.css";
import {useNavigate} from 'react-router-dom';
import cbe from "../../src/Images/cbe.jpeg";
import birhan from "../../src/Images/birhanbank.png";
import awash from "../../src/Images/awashbank.png";
import dashen from "../../src/Images/dashenbank.png";
import hibret from "../../src/Images/hibretbank.jpeg";
import { FaCross } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { LuChurch } from "react-icons/lu";

import Footer  from "../component/Footer/footer";






 function Donate(){

     const navigate = useNavigate();

     
     const navigateToForeignAids = () => {
        
        navigate('/foreignDonations');
     }

    return(
        <>
        {/* <NavBar/> */}
         
         <div className="Top-header">
             <h1>Give to Messia's</h1>
             <p>
             Messias is primarily a donor-supported organization that 
              relies on the generosity of others. Working with Messias gives 
              the opportunity to participate in a ministry that is a pivotal
              ministry to shape generations who are going to be leaders of the
              future church and the nation. Hence, we kindly request you to be 
              with us in shaping the next generation!! Messias manages donor funds
              in a trustworthy manner in keeping with our core values. We will 
              readily make organizational and/or staff financial reports available 
              as requested. Financial integrity is of utmost importance to us.</p>
         </div>

         <div className="middle-header">
             <div className="left-type">
                <h3> 
                   If you would like to give to Messias from outside Ethiopia, use this  Formate.
                   
                </h3>
                <button onClick={navigateToForeignAids}>Foreign Donation</button>
             </div>
             <div className="right-type">
                 <h1>Write a Check</h1>
                 <p>You can write a check with the following Address</p>
                 <p>Messias Alumni</p>
                 <p>P.O.Box. 1331</p>
                 <p>Culver City, CA,90232</p>
             </div>
         </div>

         <div className="inside-ethiopia">
            <h1>Gift from Inside Ethiopia</h1>
           <div className="transactions">
           <div>
          <img src={cbe} alt="cbe"/>
            <p>100034234354664</p>
          </div>
           <div>
            <img src={birhan} alt="birhanbank"/>
           <p>042345346346345</p>
           </div>
           <div>
           <img src={dashen} alt="dashenbank"/>
           <p>042345346346345</p>
           </div>
            <div>
            <img src={hibret} alt="hibretbank"/>
            <p>042345346346345</p>
            </div>
            <div>
            <img src={awash} alt="awashbank"/>
            <p>042345346346345</p>
            </div> 
           </div>
         </div>

         <div className="areas-giving">
            <h1>Areas of Giving </h1>
             
             <div className="services">
                <div>
                       <FaCross className="icons" />
                       <h1>Evangelism</h1>
                       <p>Sharing the good news of Jesus on college campuses.</p>
                </div>
                <div>
                      <GiGiftOfKnowledge className="icons" />
                       <h1>Disciple making​</h1>
                       <p>Helping students to be Christ Like.</p>
                </div>
                <div>
                     <FaPeopleRoof className="icons" />
                     <h1>Leadership Development</h1>
                     <p>Equipping students to become life-long disciples.</p>
                </div>
                <div>
                     <BsGlobe className="icons"/>
                     <h1>Missions</h1>
                     <p>To Develop Missional Mindset among students for engaging them into the 
                      global mission in the future.</p>
                </div>
                <div>
                     <LuChurch className="icons"/>
                     <h1> Building a Project</h1>
                     <p>Investing for the future Messias Capital Investment.​</p>
                </div>
             </div>

         </div>

         <Footer />
        </>
    )
}

export default Donate;