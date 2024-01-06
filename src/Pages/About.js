import NavBar from '../component/NavBar/navBar';
import "./about.css";
import missionImage from "../Images/Mission.jpg";
import objectiveImage from "../Images/objective.jpg"

export default function About(){
    return(
        <>
        <NavBar/>         
         <div className='container'>
         <div className='myblog' id='rational'>
                 <h1 className='title'>Rationale</h1>
                          <hr/>
                 <div className='content-wrapper'>
                    <div className='right-content'>
                        <p>
                            MMM believes the first century fellowship was the only fellowship, 
                            which experienced love and truth in this planet. Great work of winning 
                            souls was performed at that time. We can learn many good practices in the 
                            book of Acts.
                        </p>
                        <p>
                           Leaders of the congregation were very careful in designing the new
                           system of worship without touching identity of both Jews
                           and Gentile believers. In the book of Acts chapter 15 the
                           Jerusalem congregation reached consensus not to abolish
                           the cultural identity of Gentile believers and gave only four
                           instructions they should observe.
                        </p>
                        <p>
                          MMM respects these resolutions as key components of Messianic Judaism
                          lifestyle and belief. The God of Israel gave for each person a
                          free will to worship Him. Y'shua dismantled the dividing wall
                          of hatred to create one new man and brought to the
                          commonwealth of Israel to establish on the foundation of
                          Apostles and prophets.
                        </p>

                    </div>
                    <div className='left-content'>
                    <img
                                src={missionImage}
                                alt='Rationale'
                                style={{ width: '78%', height: 'auto' }}
                            />
                    </div>
                </div>
              </div>


              <div className='myblog' id='mission'>
              <h1 className='title'>Mission</h1>
                          <hr/>
                 <div className='content-wrapper'>
                    <div className='right-content-2'>
                        <p>
                             MMM encourages spread of Good News through winning the
                            neighborhood in love and good work. In other words home
                            based bible study and fellowship will do better to reach the
                            target of winning souls to our savior Y'shua HaMashiach. The
                            real secret of spreading Gospel is found in showing love to
                            all humankind. We should always practice love since it is the
                            manifestation of our Savior.
                        </p>
                        <p>
                            As he always loved us, we should love each other. Especially in this end time we should
                            express our greatest love for Jewish people to introduce
                            their Messiah and to build a bridge between Christians and Jews.
                            <br/>Y'shua HaMashiach, in his earthly ministry performed a style
                            of home cell ministry. He never ordered His disciples to build     
                            a temple for worship. Instead he used the already established
                            synagogues, individual homes, open areas, sea shores etc.
                            People used to bring the sick, demonized and sinners to be
                            healed and saved wherever he settles. 
                        </p>
                        <p>
                            Therefore it would be more advantageous to copy this system in order to reach the
                          great number of the un-reached people throughout the world.
                          Until the coming of Y'shua Mashiach, it is good to reach the
                          non-believers by following the same system, which He had
                          performed in His earthly ministry. This will bring great
                          blessing to believers by spreading the Gospel throughout the world.
                        </p>

                    </div>
                    <div className='left-content-2'>
                    <img
                                src={objectiveImage}
                                alt='Rationale'
                                style={{ width: '78%', height: 'auto' }}
                            />
                    </div>
                </div>
              </div>

             
         </div>
        </>
    )
}