import CardList from './CardListes'
import classes from './cardLists.module.css'
import AnimatedContent from '../../Pages/AnimatedContent'

const Dummy_data = [

{title: 'Rationale',
    discription: "MMM believes the first century fellowship was the only fellowship, which experienced love and truth in this planet. Great work of winning souls was performed at that time. We can learn many good practices in the book of Acts."
},

{title: 'Mission',
    discription: " MMM encourages spread of Good News through winning the neighborhood in love and good work. In other words home based bible study and fellowship will do better to reach the target of winning souls to our savior Y'shua HaMashiach. "
},

{title: 'Purpose',
    discription: "MMM is a ministry that encourages both Jews and Gentile believers, to come together and pray for the spread of Good News throughout the world. MMM urges believers to work with their own hands and share with those who are in need as this is the real secret"
},

{title: 'Objective',
    discription: "The main objective of MMM is to accomplish the mission that Y'shua gave us in fast and efficient way. (Matt. 28:19-20). The spiritual bondage of this world can only be broken by good work and intercession of true believers on strategic"
}
]

function Card(){
    return(
         
        <div>
              <AnimatedContent>
            <h1 className={classes.title}>Who we are</h1>
               <CardList datas = {Dummy_data}/>
               </AnimatedContent>
           </div>
    
        
    )
}

export default Card



