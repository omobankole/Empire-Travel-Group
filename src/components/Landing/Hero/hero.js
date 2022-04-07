import Header from "../../UI/Header/header";
import DatePicker from "./DatePicker/datePicker";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.introText}>
        <h1>Make Your Kid’s <br /> Holiday Memorable</h1>
        <p>
          Let tour kids join several other children for the best tour within and
          outside Nigeria. Students will enjoy unforgettable experience of extra
          curriculum learning, relaxation and great fun.
        </p>
      </div>
      <DatePicker />
    </div>
  );
};

export default Hero;
