import classes from "./button.module.css";
const Button = ({ text, width, bg }) => {
  return (
    <button className={classes.button}>
      {text}
    </button>
  );
};

export default Button;
