import classes from "./homeTour.module.css";
import { Link } from "react-router-dom";
import Card from "../../../components/Tours/card";
import { tourArray } from "../../../constants";

const HomeTour = () => {
  return (
    <div className={classes.main}>
      <div className={classes.tourInfo}>
        <h3>Available Tour</h3>
        <Link to="/tours">View all tours</Link>
      </div>
      <div></div>
      <div className={classes.homeTour}>
        {tourArray.slice(0, 3).map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeTour;
