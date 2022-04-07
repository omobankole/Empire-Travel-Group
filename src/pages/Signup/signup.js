import classes from "./signup.module.css";
import SignUp from "../../assets/images/Login/Sign-up-hero.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Landing/travel.svg";
import FormGroup from "../../components/UI/FormGroup/formGroup";
import Button from "../../components/UI/Button/button";
import { FaTimes } from "react-icons/fa";
import Checkbox from "../../components/UI/FormGroup/Checkbox/checkbox"; 
const Signup = () => {
  return (
    <div className={classes.loginPage}>
     <div className={classes.top}>
        <Link to="/" className={classes.logoContainer}>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <span>Empire Travel Group</span>
        </Link>
        <Link to="/" className={classes.FaTimes}>
          <FaTimes />
        </Link>
      </div>

      <div className={classes.flexItem}>
        <div className={classes.loginContent}>
          <h3>GET STARTED</h3>
          <form action="">
            <FormGroup label="Fullname*" type="text" />
            <FormGroup
              label="Name of school"
              type="text"
              placeholder="optional"
            />
            <FormGroup label="Email*" type="email" placeholder="email" />
            <FormGroup label="Password*" type="password" placeholder="******" />
            <FormGroup
              label="Confirm Password*"
              type="password"
              placeholder="******"
            />
            <div className={classes.check}>
              {/* <input type="checkbox" /> */}
              <Checkbox />
              <label htmlFor="">Accept the terms and policies</label>
            </div>
            <div class={classes.button}>
              <Button text="Register" />
            </div>
          </form>
          <div class={classes.already}>
            <span>Already have an account?</span>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
        <div class={classes.heroSign}>
          <img src={SignUp} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
