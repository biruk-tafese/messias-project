import './blog.css'


function Blog(){
    return(
        <>
        <div className="parent">


            <div className="content">
                <h1>News and Updates</h1>
                <p>The Harvest is a monthly publication of EvaSUE dedicated to sharing the latest news with our partners.</p>
                <button>View all Blogs</button>
            </div>

            <div className="page-wrapper">
                <div className='post-slider'>
                    <h1 className='slider-title'>Our Blogs</h1>
                    <div className='post-wrapper'>
                        <div className='post'>1</div>
                        <div className='post'>2</div>
                        <div className='post'>3</div>
                        <div className='post'>4</div>
                        <div className='post'>5</div>
                    </div>


                </div>
            </div>
        </div>
        </>
    )
}

export default Blog