import classes from "./destinations.module.css";
import Card from "../../components/Destinations/card";
import { array } from "../../constants";
const Destinations = () => {
  return (
    <div className={classes.main}>
      <h2>Destinations</h2>
      <div className={classes.hove}>
        {array.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
