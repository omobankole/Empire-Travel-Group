import classes from "./formGroup.module.css";

const FormGroup = ({ label, ...props }) => {
    return (
         <div className={classes.formGroup}>
             <label htmlFor="" className={classes.formLabel}>{label}</label>
             <input {...props} className={classes.formInput} />
         </div> 
    );
}
 
export default FormGroup;