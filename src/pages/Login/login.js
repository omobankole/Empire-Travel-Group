import classes from "./login.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/button";
import Logo from "../../assets/images/Landing/travel.svg";
import LoginHero from "../../assets/images/Login/Login-Hero.svg";
import google from "../../assets/images/Login/google.svg";
import facebook from "../../assets/images/Login/facebook.svg";
import FormGroup from "../../components/UI/FormGroup/formGroup";
import { FaTimes } from "react-icons/fa";
import Checkbox from "../../components/UI/FormGroup/Checkbox/checkbox";

const Login = () => {
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
          <h3>Welcome Back!</h3>
          <div className={classes.signIn}>
            <Link to="/" className={classes.google}>
              <img src={google} alt="google" />
              <span className={classes.span}>Sign up with Google</span>
            </Link>
            <Link to="/" className={classes.facebook}>
              <img src={facebook} alt="facebook" />
              <span className={classes.span}>Sign up with Facebook</span>
            </Link>
          </div>
          <div className={classes.divide}>
            <span></span>
            <p>or</p>
            <span></span>
          </div>
          <form action="">
            <FormGroup
              label="Email"
              type="text"
              placeholder="Enter email address"
            />
            <FormGroup
              label="Name of school"
              type="text"
              placeholder="********"
            />
            <div class={classes.forget}>
              <div className={classes.check}>
                <Checkbox />
                <label htmlFor="">Remember me</label>
              </div>
              <Link to="">Forgot Password</Link>
            </div>
            <div class={classes.button}>
              <Button text="Login" />
            </div>
          </form>
        </div>
        <div class={classes.heroLogin}>
          <img src={LoginHero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Login;
