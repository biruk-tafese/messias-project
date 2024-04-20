
import { useNavigate  } from 'react-router-dom';
import classes from './cardItems.module.css'

export default function CardItems(props){

    const navigate = useNavigate ();

    const handleReadMoreClick = () => {
        // Navigate to the "/another-page" route
        navigate('/about');
      };

    return(
            <div className={classes.card}>
                <div className={classes.cardContent}>
                    <h1>{props.title}</h1>
                    <p>{props.discription}</p>
                    <button className={classes.cardButton} onClick={handleReadMoreClick}>Read More</button>
                </div>
            </div>
    )

}