import Card from "../../components/Services/card";
import classes from "./services.module.css";
import { serviceArray } from "../../constants";

const Services = () => {
  return (
    <div className={classes.main}>
      <h2>Services</h2>
      <div>
        {serviceArray.map((item, index) => (
            <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
