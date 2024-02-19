import './home.css'
import AnimatedContent  from '../../Pages/AnimatedContent'

function Home(){
    return(
        <>
       
        <div className="home">
            <div className='welcome-text'>
            <AnimatedContent>
                <h1 className='h1'>Messia's Mission Ministry Ethiopia</h1>
                <h3 className='h3'>Building bridges with our Jewish Brothers</h3>
            </AnimatedContent>
            </div>
          
        </div>
        
        </>
    )
}

export default Home