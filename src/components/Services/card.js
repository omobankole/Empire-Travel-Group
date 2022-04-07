import Button from "../UI/Button/button";
import classes from "./card.module.css";

const Card = ({ text, image }) => {
  return (
    <div className={classes.main}>
      <div className={classes.image}>
         <img src={image} alt="" className={classes.img} /> 
      </div>
      <div className={classes.book}>
        <p>{text}</p>
        <Button text="LearnMore" />
      </div>
    </div>
  );
};

export default Card;
