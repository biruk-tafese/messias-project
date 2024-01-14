import { useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import missionImage from '../Images/Mission.jpg';
import objectiveImage from '../Images/objective.jpg';
import Footer from '../component/Footer/footer';
import './about.css';



const AnimatedContent = ({ children }) => {
    const controls = useAnimation(); // Initialize controls using useAnimation
    const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: '-100px 10px',
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, y: 0 },
      }} >
      {children}
    </motion.div>
  );
};

const About = () => {
    return (
      <>
       
        <div className='container'>
          <div className='myblog' id='rational'>
          <AnimatedContent>
            <h1 className='title'>Rationale</h1>
            <hr />
            </AnimatedContent>
            <div className='content-wrapper'>
                <div className='right-content'>
              <AnimatedContent>
                <p>
                  MMM believes the first century fellowship was the only fellowship,
                  which experienced love and truth on this planet. Great work of winning
                  souls was performed at that time. We can learn many good practices in the
                  book of Acts.
                </p>
                 <p>
                  Leaders of the congregation were very careful in designing the new
                  system of worship without touching identity of both Jews and Gentile believers. In the book of Acts chapter 15 the
                  Jerusalem congregation reached consensus not to abolish
                  the cultural identity of Gentile believers and gave only four instructions they should observe.
                 </p>
                 <p>
                  MMM respects these resolutions as key components of Messianic Judaism
                  lifestyle and belief. The God of Israel gave for each person a
                  free will to worship Him. Y'shua dismantled the dividing wall
                  of hatred to create one new man and brought to the commonwealth of Israel to establish on the foundation of
                  Apostles and prophets.
                 </p>
              </AnimatedContent>
              </div>
              <div className='left-content'>
              
              <AnimatedContent>
                <img
                  src={missionImage}
                  alt='Rationale'
                  style={{ width: '100%', height: 'auto' }}
                />
              </AnimatedContent>
              </div>
            </div>
          </div>
  
         
  
          <div className='myblog' id='mission'>
          <AnimatedContent>
            <h1 className='title'>Mission</h1>
            <hr />
            </AnimatedContent>
            <div className='content-wrapper'>
             <div className='right-content-2'>
              <AnimatedContent>
                <p>
                  MMM encourages the spread of the Good News through winning the
                  neighborhood in love and good work.In other words home
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
                 Y'shua HaMashiach, in his earthly ministry performed a style
                 of home cell ministry. He never ordered His disciples to build a temple for worship. Instead he used the already established
                 synagogues, individual homes, open areas, sea shores etc.
                </p>
                 <p>
                  People used to bring the sick, demonized and sinners to be
                  healed and saved wherever he settles. Therefore it would be
                  more advantageous to copy this system in order to reach the
                  great number of the un-reached people throughout the world.
                  Until the coming of Y'shua Mashiach, it is good to reach the
                  non-believers by following the same system, which He had
                  performed in His earthly ministry. This will bring great
                  blessing to believers by spreading the Gospel throughout the world.
                 </p>
                 
              </AnimatedContent>
              </div>
              <div className='left-content-2'>
              <AnimatedContent>
                <img
                  src={objectiveImage}
                  alt='Rationale'
                  style={{ width: '100%', height: 'auto', paddingBottom:'15px' }}
                />
                <p>
                  From history we learn that great men of their era also used
                  the same system as Y'shua Mashiach did to win the souls of
                  many. It is better to adopt good practices in order to score
                  better achievement in winning souls. The technological
                  advancement of the present day civilization will help us to do
                  better things if we are able to use it righteously. The world is
                  becoming one village through modern communication  systems. 
                  Therefore we believers have to make good use of this technological 
                  advancement to spread the Gospel globally.
                 </p>   
                 <p>
                  One of the systems that we should use is conducting intercession through Internet in different places
                  at the same time. Intercession is a powerful instrument that breaks the works of darkness. The other is to use social
                  Media to share teachings, Scripture verses, flyers, brochures and e-books.
                  </p>
              </AnimatedContent>
              </div>
            </div>
          </div>
        </div>
           
           {/* {New section} */}
        <div className='myblog' id='rational'>
          <AnimatedContent>
            <h1 className='title'>Purpose</h1>
            <hr />
            </AnimatedContent>
            <div className='content-wrapper'>
                <div className='right-content'>
              <AnimatedContent>
                <p>
                MMM is a ministry that encourages both Jews and Gentile
                believers, to come together and pray for the spread of Good
                News throughout the world. MMM urges believers to work
                with their own hands and share with those who are in need
                as this is the real secret of spreading the Good News. We
                humbly request your support in every means you can
                starting with prayers, and sharing our vision with family and
                friends.
                </p>
                 
                {/* Add more paragraphs or content here */}
              </AnimatedContent>
              </div>
              <div className='left-content purpose'>
              
              <AnimatedContent>
                <img
                  src={missionImage}
                  alt='Rationale'
                  style={{ width: '100%', height: 'auto' }}
                />
              </AnimatedContent>
              </div>
            </div>
          </div>

        {/* {New section 2} */}
        <div className='myblog' id='mission'>
          <AnimatedContent>
            <h1 className='title'>Objective</h1>
            <hr />
            </AnimatedContent>
            <div className='content-wrapper'>
             <div className='right-content-2'>
              <AnimatedContent>
                <p>
                The main objective of MMM is to accomplish the mission that
                Y'shua gave us in fast and efficient way. (Matt. 28:19-20). The
                spiritual bondage of this world can only be broken by good
                work and intercession of true believers on strategic issues
                based on current information and prophesies written in the
                Holy Scriptures.
                </p>
                {/* Add more paragraphs or content here */}
              </AnimatedContent>
              </div>
              <div className='left-content-2 objective'>
              <AnimatedContent>
                <img
                  src={objectiveImage}
                  alt='Rationale'
                  style={{ width: '100%', height: 'auto' }}
                />
              </AnimatedContent>
              </div>
            </div>
          </div>
          <div> 
          </div>
          <div className='footer'>
          <Footer/>
          </div>
      </>
    );
  };
  
  export default About;
  