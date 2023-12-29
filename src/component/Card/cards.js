import CardList from './CardListes'
import './card.css'

const Dummy_data = [

{title: 'Rationale',
    discription: "MMM believes the first century fellowship was the only fellowship, which experienced love and truth in this planet. Great work of winning souls was performed at that time. We can learn many good practices in the book of Acts."
},

{title: 'Mission',
    discription: " MMM encourages spread of Good News through winning the neighborhood in love and good work. In other words home based bible study and fellowship will do better to reach the target of winning souls to our savior Y'shua HaMashiach. "
},

{title: 'Purpose',
    discription: "MMM is a ministry that encourages both Jews and Gentile believers, to come together and pray for the spread of Good News throughout the world. MMM urges believers to work with their own hands and share with those who are"
},

{title: 'Objective',
    discription: "The main objective of MMM is to accomplish the mission that Y'shua gave us in fast and efficient way. (Matt. 28:19-20). The spiritual bondage of this world can only be broken by good work and intercession of true believers on strategic"
}
]

function Card(){
    return(
        <div className='background'>
               <CardList datas = {Dummy_data}/>
           </div>
    
        
    )
}

export default Card









{/* <div className='card'>
                <div className='cardContent'>
                    <h1>Rationale</h1>
                    <p>
                            MMM believes the first century fellowship was the only
                            fellowship, which experienced love and truth in this planet.
                            Great work of winning souls was performed at that time. We
                            can learn many good practices in the book of Acts. 
                        </p>
                        <a href='#' className='card-button'>Read More</a>
                </div>

            </div>

            <div className='card'>
                <div className='cardContent'>
                    <h1>Mission</h1>
                    <p>
                            MMM encourages spread of Good News through winning the
                            neighborhood in love and good work. In other words home
                            based bible study and fellowship will do better to reach the
                            target of winning souls to our savior Y'shua HaMashiach. 
                        </p>
                        <a href='#' className='card-button'>Read More</a>
                </div>

            </div>

            <div className='card'>
                <div className='cardContent'>
                    <h1>Purpose</h1>
                    <p>
                            MMM is a ministry that encourages both Jews and Gentile
                            believers, to come together and pray for the spread of Good
                            News throughout the world. MMM urges believers to work 
                            with their own hands and share with those who are
                        </p>
                        <a href='#' className='card-button'>Read More</a>
                </div>

            </div>

            <div className='card'>
                <div className='cardContent'>
                    <h1>Objective</h1>
                    <p>
                            The main objective of MMM is to accomplish the mission that
                            Y'shua gave us in fast and efficient way. (Matt. 28:19-20). The
                            spiritual bondage of this world can only be broken by good
                            work and intercession of true believers on strategic
                        </p>
                        <a href='#' className='card-button'>Read More</a>
                </div>

            </div>
             */}