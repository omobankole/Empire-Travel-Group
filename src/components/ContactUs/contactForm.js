import classes from "./contactForm.module.css";

const ContactForm = () => {
  return (
    <div className={classes.main}>
      <h3>Contact</h3>
      <form action="" className={classes.contactForm}>
        <div class={classes.textPut}>
          <input type="text" required placeholder="First Name" />
        </div>
        <div class={classes.textPut}>
          <input type="text" required placeholder="Last Name" />
        </div>
        <div class={classes.textPut}>
          <input type="email" required placeholder="Email" />
        </div>
        <div class={classes.textPut}>
          <input type="text" required placeholder="Phone" />
        </div>
        <div class={classes.textPut}>
          <input type="text" required placeholder="Subject" />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Message"
            className={classes.message}
          ></textarea>
        </div>
        <div class={classes.button}>
          <button type="submit" className={classes.kite}>
            <span>SEND</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
