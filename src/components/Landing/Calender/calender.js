import classes from "./calender.module.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useState } from "react";

const Calender = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <div className={classes.main}>
      <h2>Holiday Schedule Calendar</h2>
      <div className={classes.getNow}>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
        <div className={classes.line}></div>
        <div className={classes.down}>
          <p className={classes.tour}>Tour</p>
          <p className={classes.holiday}>Easter holiday camp</p>
          <br />
          <p className={classes.tour}>Location</p>
          <p className={classes.holiday}>United States of America</p>
        </div>
      </div>
    </div>
  );
};

export default Calender;
