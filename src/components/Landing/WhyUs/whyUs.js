import classes from "./whyUs.module.css";
import WhyUsProps from "./WhyUsProps/whyUsProps";

const WhyUs = () => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <h3>Why Choose Us</h3>
        <p>
          There are numerous reasons several students chose Empire Travel Group
          and have never regretted their decisions.
        </p>
      </div>
      <div className={classes.gridMe}>
        <WhyUsProps
          title="International Partnership"
          span="01."
          word="Empire Travel Group is the official country office and exclusive authorized agent in Nigeria for Grazac Airline & Learning Group and more."
        />
        <WhyUsProps
          title="Global Packages"
          span="02."
          word="Our products are curriculum-based vis- avis other tour organizers. Our products & packages goes beyond mere sight-seeing and we ensure all our tour products are global brand."
        />
        <WhyUsProps
          title="Learning outside the classroom"
          span="03."
          word="We are the first and the only company in the sub Sahara Africa applying the principle of learning outside the classroom to its students."
        />
      </div>
    </div>
  );
};

export default WhyUs;
