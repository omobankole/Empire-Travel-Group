import Card from "../../components/Tours/card";
import classes from "./tours.module.css";
import { tourArray } from "../../constants";

const Tours = () => {
  return (
    <div className={classes.main}>
      <h2>All Tours</h2>
      <div>
        {tourArray.map((item, index) => (
            <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
