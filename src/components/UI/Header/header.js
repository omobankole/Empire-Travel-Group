import classes from "./header.module.css";
import Logo from "../../../assets/images/Landing/travel.svg";
import { NavLink, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import cx from "classnames";
import { useState } from "react";
import navbar from "../../../assets/images/Landing/navbar.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showSideBar = () => setIsOpen(!isOpen);

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logoContainer}>
        <div className={classes.image}>
          <img src={Logo} alt="Logo" />
        </div>
        <span>Empire Travel Group</span>
      </Link>
      <div className={isOpen ? classes.allNav : classes.allNav2}>
        <nav>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/destinations">
            Destinations
          </NavLink>
          <NavLink to="/tours">
            Tours
          </NavLink>
          <NavLink to="/services">
            Services
          </NavLink>
          <NavLink to="/gallery">
            Gallery
          </NavLink>
          <NavLink to="/contactUs">
            Contact Us
          </NavLink>
        </nav>
          <div className={classes.auth}>
            <Link to="/login">Login</Link>
            <Link to="/signup" className={classes.signup}>
              Signup
            </Link>
          </div>
        {isOpen && (
          <button
            className={cx(classes.bar, classes.hideBar)}
            onClick={showSideBar}
          >
            <FaTimes />
          </button>
        )}
      </div>
      <button className={classes.bar} onClick={showSideBar}>
        <img src={navbar} alt="navbar" />
      </button>
    </header>
  );
};

export default Header;
