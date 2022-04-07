import classes from "./datePicker.module.css";
import pin from "../../../../assets/images/Destination/pin.svg";
import calendar from "../../../../assets/images/Landing/calender.svg";
import guest from "../../../../assets/images/Landing/guest.svg";
import search from "../../../../assets/images/Landing/search.svg";
import DownArrow from "../../../../assets/images/Landing/downArrow.svg";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { datalistArray } from "../../../../constants";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerTag = () => {
  const [startDate, setStartDate] = useState(undefined);
  return (
    <div className={classes.main}>
      <div className={classes.toured}>
        <label htmlFor="" className={classes.textIt}>
          <img src={pin} alt="tour" />
          Choose Tour
        </label>
        <input
          list="countries"
          name="countries"
          id="country"
          placeholder="where do you want to go?"
        />
        <datalist id="countries">
          {datalistArray.map((item, index) => (
            <option value={item} key={index}></option>
          ))}
        </datalist>
      </div>

      <div className={classes.datePicker}>
        <label htmlFor="day" className={classes.textIt}>
          <img src={calendar} alt="date" />
          Date
        </label>
        <div className={classes.downArrow}>
          <DatePicker
            onChange={(date) => setStartDate(date)}
            placeholderText="Choose a date"
            selected={startDate}
            // selectedDate={startDate}
          />
          <img src={DownArrow} alt="" />
        </div>
      </div>
      <div className={classes.guest}>
        <label htmlFor="" className={classes.textIt}>
          <img src={guest} alt="guest" />
          Guest
        </label>
        <select name="" id="" className={classes.select}>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
        </select>
      </div>
      <div className={classes.search}>
        <img src={search} alt="search" />
      </div>
    </div>
  );
};

export default DatePickerTag;
