import classes from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ text, image }) => {
  return (
    <div className={classes.main}>
      <div className={classes.image}>
         <img src={image} alt="" className={classes.img} /> 
      </div>
      <div className={classes.book}>
        <p>{text}</p>
        <Link to="/bookNow">Learn More</Link>
      </div>
    </div>
  );
};

export default Card;


