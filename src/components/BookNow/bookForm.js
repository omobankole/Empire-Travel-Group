import classes from "./bookForm.module.css";
import Button from "../UI/Button/button";

const BookForm = () => {
  return (
    <div className={classes.line}>
      <h2>Book Now</h2>
      <form action="" className={classes.contactForm}>
        <div class={classes.textPut}>
          <input type="text" required placeholder="Name/Name of School*" />
        </div>
        <div class={classes.textPut}>
          <input type="email" required placeholder="E-mail*" />
        </div>
        <div class={classes.textPut}>
          <input type="date" required placeholder="dd-mm-yy*" />
        </div>
        <div class={classes.textPut}>
          <select
            className={classes.select}
            placeholder="Travel Tour Service"
          >
            <option value="">Travel Tour Service</option>
            <option value="">Travel Only</option>               
            <option value="">Travel Only</option>               
            <option value="">Travel Only</option>               
            <option value="">Travel Only</option>               
            <option value="">Travel Only</option>               
          </select>
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Message"
            className={classes.message}
          ></textarea>
        </div>
        <div class={classes.button}>
          <Button type="submit" text="BOOK NOW" />      
        </div>
      </form>
    </div>
  );
};

export default BookForm;
