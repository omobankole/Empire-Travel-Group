import classes from "./checkbox.module.css";

const Checkbox = ({ text }) => {
  return (
    <>
      <label className={classes.container}>
        <input type="checkbox" defaultChecked="checked" />
        {text}
        <span className={classes.checkmark}></span>
      </label>
    </>
  );
};

export default Checkbox;
