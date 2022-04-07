import classes from "./cities.module.css";
import Card from "../../Destinations/card";
import { array } from "../../../constants";


const Cities = () => {
  return (
    <div className={classes.main}>
      <h3>Popular Destination</h3>
      <div className={classes.cities}>
        {array.slice(0, 4).map((item, index) => (
          <Card {...item} key={index} className={classes.each} />
        ))}
      </div>
    </div>
  );
};

export default Cities;
