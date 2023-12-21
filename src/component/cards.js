import './card.css'


function Card(){
    return(
        <div className='background'>
            <div className="card-container">
            <div className='card'>
                <div className='card-content'>
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
                <div className='card-content'>
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
                <div className='card-content'>
                    <h1>Purpose</h1>
                    <p>
                            MMM is a ministry that encourages both Jews and Gentile
                            believers, to come together and pray for the spread of Good
                            News throughout the world. MMM urges believers to work 
                            with their own hands and share with those who are in need 
                            as this is the real secret of spreading the Good News.
                        </p>
                        <a href='#' className='card-button'>Read More</a>
                </div>

            </div>
            
        </div>
        </div>
        
    )
}

export default Card