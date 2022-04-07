import classes from "./card.module.css";
// import Button from

const Card = ({ text, image }) => {
    return ( 
        <div className={classes.main}>
            <div className={classes.size}>
                <img src={image} alt="card" className={classes.image} />
            </div>
            <p>{text}</p>
        </div>
     );
}
 
export default Card;