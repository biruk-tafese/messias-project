import "./Donate.css";
import cbe from "../../src/Images/cbe.jpeg";
import awash from "../../src/Images/awashbank.png";
import dashen from "../../src/Images/dashenbank.png";
import { FaCross } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { LuChurch } from "react-icons/lu";
import AnimatedContent from "./AnimatedContent";
import Footer  from "../component/Footer/footer";






 function Donate(){

    return(
        <>
        {/* <NavBar/> */}
         
         <div className="Top-header">
           <AnimatedContent>
             <h1>Give to Messihanic Mission</h1>
             <p>
             Messiah is primarily a donor-supported organization that 
              relies on the generosity of others. Working with Messias gives 
              the opportunity to participate in a ministry that is a pivotal
              ministry to shape generations who are going to be leaders of the
              future church and the nation. Hence, we kindly request you to be 
              with us in shaping the next generation!! Messias manages donor funds
              in a trustworthy manner in keeping with our core values. We will 
              readily make organizational and/or staff financial reports available 
              as requested. Financial integrity is of utmost importance to us.</p>
            </AnimatedContent>
         </div>
         <AnimatedContent>

         <div className="middle-header">
         
             <div className="left-type">
                <h3> 
                   If you would like to give to Messias from outside Ethiopia, use this  Formate.
                   
                </h3>
                <a href="http://www.ethiopiajudaica.org" rel="noreferrer" target='_blank'><button>Foreign Donation</button></a>
             </div>
             <div className="right-type">
                 <h1>Write a Check</h1>
                 <p>You can write a check with the following Address</p>
                 <p>Messias Alumni</p>
                 <p>P.O.Box. 4941 </p>
                 <p>3.Addis Ababa City Administration
           Yeka Sub-City, Wereda 09, House No. B119_16</p>
             </div>
         </div>
         </AnimatedContent>
        <AnimatedContent>
         <div className="inside-ethiopia">
            <h1>Gift from Inside Ethiopia</h1>
           <div className="transactions">
           <div>
          <img src={cbe} alt="cbe"/>
            <p><span>CBETETAA - </span>1000546505662</p>
            <p>DANIEL BELAY MEKONNEN</p>
          </div>
           <div>
           <img src={dashen} alt="dashenbank"/>
           <p>5024520457011</p>
           <p>DANIEL BELAY MEKONNEN</p>
           </div>
            <div>
            <img src={awash} alt="awashbank"/>
            <p>013481159704800</p>
            <p>DANIEL BELAY MEKONNEN</p>
            </div> 
           </div>
         </div>
        </AnimatedContent>

         <div className="areas-giving">
         <AnimatedContent>
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
             </AnimatedContent>
         </div>

         <Footer />
        </>
    )
}

export default Donate;