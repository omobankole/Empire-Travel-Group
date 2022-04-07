import classes from "./checkbox.module.css";

const Checkbox = () => {
  return (
    <>
      <label className={classes.container}>
        <input type="checkbox" checked="checked" />
        <span className={classes.checkmark}></span>
      </label>
    </>
  );
};

export default Checkbox;
