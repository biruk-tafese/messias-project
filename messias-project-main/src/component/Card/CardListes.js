import classes from './cardLists.module.css'
import CardItems from './CardItems'

export default function CardList(props){
    return(
            <div className={classes.cardContainer}>
            {
                props.datas.map((data) => (
                    <CardItems
                    key = {data.title}
                    title = {data.title} 
                    discription = {data.discription}
                    />
                ))
            }
        </div>
        
    )
}