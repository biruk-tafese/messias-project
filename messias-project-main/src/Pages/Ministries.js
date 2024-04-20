import "./minstries.css";
import AnimateContent from "./AnimatedContent";
import Footer from "../component/Footer/footer";

import shabat1 from "../Images/minstries/shabatworship1.jpg";
import shabat2 from "../Images/minstries/shabatworship3.jpg";
import minstiry from "../Images/minstries/Onminstries1.jpg";
import charminstry from "../Images/minstries/MinstiryCharity2.jpg";

const ministry = () => {
    return (
        <>
         <AnimateContent>
        <div className="Top-title">
        <h1><span>Tour Our Ministries</span></h1>
       </div>
        </AnimateContent>
          <AnimateContent>
          <div className="ministry-container">
            <div className="ministry-gallery">
                <div className="ministry-item">
                    <img src={shabat1} alt="Ministry 1" />
                    <div className="ministry-description">
                        <h2>Our Shabbat worship</h2>
                        <p>Our Shabat worship with brothers</p>
                    </div>
                </div>
                <div className="ministry-item">
                    <img src={shabat2} alt="Ministry 2" />
                    <div className="ministry-description">
                        <h2>Our Shabbat worship</h2>
                        <p>Our gathering for shabat worship</p>
                    </div>
                </div>
                <div className="ministry-item">
                    <img src={minstiry} alt="Ministry 3" />
                    <div className="ministry-description">
                        <h2>Community Service</h2>
                        <p>This is our charity organization working under our ministry</p>
                    </div>
                </div>

                <div className="ministry-item">
                    <img src={charminstry} alt="Ministry 3" />
                    <div className="ministry-description">
                        <h2>Community Service</h2>
                        <p>This is our charity organization working under our ministry</p>
                    </div>
                </div>
                {/* Add more ministry items as needed */}
            </div>
        </div>
        </AnimateContent>
        <Footer />
        </>
    );
};

export default ministry;