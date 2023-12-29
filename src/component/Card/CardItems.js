import classes from './cardItems.module.css'

export default function CardItems(props){

    return(
            <div className={classes.card}>
                <div className={classes.cardContent}>
                    <h1>{props.title}</h1>
                    <p>{props.discription}</p>
                    <a href='#' className={classes.cardButton}>Read More</a>
                </div>
            </div>
    )

}