import classes from "./formGroup.module.css";

const FormGroup = ({ label, image, pass, setPass, ...props }) => {
  return (
    <div className={classes.formGroup}>
      <label htmlFor="" className={classes.formLabel}>
        {label}
      </label>
      <div className={classes.visible}>
        <input
          {...props}
          className={classes.formInput}
          type={pass ? "text" : "password"}
        />
        <span className={classes.HideShow}>
          <img src={image} alt="" onClick={() => setPass(!pass)} />
        </span>
      </div>
    </div>
  );
};

export default FormGroup;
