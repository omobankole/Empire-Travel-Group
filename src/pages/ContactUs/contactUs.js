import classes from "./contactUs.module.css";
import { Link } from "react-router-dom";
import ContactForm from '../../components/ContactUs/contactForm';

const ContactUs = () => {
    return ( 
        <div className={classes.main}>
            <h2>Contact</h2>
            <div className={classes.flex}>
                <div className={classes.info}>
                    <h3>Our Office</h3>
                    <div class={classes.textLine}>
                        <p>Address</p>
                        <article>4th Floor, Shobo House, Ewang Street, Abeokuta, Nigeria</article>
                    </div>
                    <div class={classes.textLine}>
                        <p>Phone Numbers</p>
                        <article>+2348022235119, +23418880225, +2348055469754</article>
                    </div>
                    <div class={classes.textLine}>
                        <p>Websites</p>
                        <Link to="https://www.Empiretravelgroup.com">Empire Travel Group</Link>
                    </div>
                    <div class={classes.textLine}>
                        <p>Email</p>
                        <article>info@empiretravelgroup.com</article>
                    </div>
                </div>
                <div class={classes.fill}>
                    <ContactForm />
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;