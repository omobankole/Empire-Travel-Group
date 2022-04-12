import classes from "./checkbox.module.css";

const Checkbox = ({ text }) => {
  return (
    <>
      <label className={classes.container}>
        <input type="checkbox" defaultChecked="checked" />
        <span className={classes.checkmark}></span>
        {text}
      </label>
    </>
  );
};

export default Checkbox;
