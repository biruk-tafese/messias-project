
import './register.css'

export default function Register(){
    return(
        <div className="contents">
            <div className="discription">
                <h1>Subscribe to Our Newsletter</h1>
                <p> The Messiah's Mission Ministry has many stories to share with you. A free subscription gives you the opportunity to stay tuned to our dynamic ministry through our monthly publication, 
                 There you can find major ministry updates, information about Messiah's Mission Ministry. </p>
                </div>
            <div className="input">
                <input placeholder='Your Email'/>
                <button>Subscribe Now</button>
                </div>
        </div>
    )
}