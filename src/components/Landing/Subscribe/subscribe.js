import classes from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={classes.mainForm}>
      <form action="">
        <label htmlFor="">
          Subscribe to get informations, latest news and other offers about
          Empire Travel group
        </label>
        <input type="email" placeholder="Enter Your Email Address" />
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
