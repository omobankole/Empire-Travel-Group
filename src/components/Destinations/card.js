import classes from "./card.module.css";
import Pin from "../../assets/images/Destination/pin.svg";


const Card = ({ image, location }) => {
  return (
    <div className={classes.main}>
      <img src={image} alt="Card" className={classes.place} />
      <span className={classes.text}>
        <img src={Pin} alt="Pin" /> {location}
      </span>
    </div>
  );
};

export default Card;
