import classes from "./footer.module.css";
import { Link } from "react-router-dom";
import Logo from '../../../assets/images/Landing/plane.svg';
import facebook from '../../../assets/images/Footer/facebook.svg';
import instagram from '../../../assets/images/Footer/instagram.svg';
import twitter from '../../../assets/images/Footer/twitter.svg';
import youtube from '../../../assets/images/Footer/youtube.svg';

const Footer = () => {
  return (
    <footer>
      <div className={classes.container}>

        <div className={classes.row}>

          <div className={classes.column1}>
            <Link to="/" className={classes.logoContainer}>
              <div className={classes.image}>
                <img src={Logo} alt="Logo" />
              </div>
              <span>Empire Travel Group</span>
            </Link>
            <p>Empire Travel Group and Tours Ltd is a leading travel  company in Abeokuta, which specializes  Educational and Holiday Tour.</p>
          </div>

          <div className={classes.colum2}>
            <h4>Tours</h4>
            <p><Link to="/bookNow">Easter Tour</Link></p>
            <p><Link to="/bookNow">Christmas Tour</Link></p>
            <p><Link to="/bookNow">Musical Tour</Link></p>
            <p><Link to="/bookNow">Art & Design Tour</Link></p>
          </div>

          <div className={classes.colum2}>
            <h4>Support</h4>
            <p><Link to="">Account</Link></p>
            <p><Link to="">Support Center</Link></p>
            <p><Link to="">Feedback</Link></p>
            <p><Link to="">Accessibility</Link></p>
          </div>

          <div className={classes.colum2}>
            <h4>Links</h4>
            <p><Link to="/contactUs">Contact Us</Link></p>
            <p><Link to="">Terms and Services</Link></p>
            <p><Link to="">Privacy Policy</Link></p>
            <p><Link to="/">About Us</Link></p>
          </div>

          <div className={classes.colum2}>
            <h4>Follow us</h4>
            <div className={classes.icon}>
              <p><Link to=""><img src={facebook} alt="facebook" /></Link></p>
              <p><Link to=""><img src={instagram} alt="instagram" /></Link></p>
              <p><Link to=""><img src={youtube} alt="youtube" /></Link></p>
              <p><Link to=""><img src={twitter} alt="twitter" /></Link></p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
