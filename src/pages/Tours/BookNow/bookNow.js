import classes from "./bookNow.module.css";
import BookForm from "../../../components/BookNow/bookForm";
import Book from "../../../assets/images/Tours/book1.png";
import { Link } from "react-router-dom";

const BookNow = () => {
  return (
    <div className={classes.main}>
      <div className={classes.flexOne}>
        <div className={classes.infoBook}>
          <h3>Easter Holiday Camp in America</h3>
          <div className={classes.Himage}>
            <img src={Book} alt="" />
          </div>
          <article>
            <p>
            Easter Holiday camp is a fun holiday full of activities that seeks to teach children important life skills for later in life.
            </p>
            <p>
              Some camps are dedicated to a certain field, these include:
              sports, drama, computer programming, science, mathematics and
              music. While certain camps may offer a little of everything.
            </p>
            <p>
              Some camps are dedicated to a certain field, these include:
              sports, drama, computer programming, science, mathematics and
              music. While certain camps may offer a little of everything.
            </p>
          </article>
          <Link to="/contactUs">Contact Us</Link>
        </div>
        <div className={classes.fill1}>
          <BookForm />
        </div>
      </div>
    </div>
  );
};

export default BookNow;
