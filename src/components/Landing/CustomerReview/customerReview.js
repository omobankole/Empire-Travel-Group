import classes from "./customerReview.module.css";
import cynthia from "../../../assets/images/Landing/cynthia.svg";
import darasimi from "../../../assets/images/Landing/darasimi.svg";
import paul from "../../../assets/images/Landing/paul.svg";
import eclipse1 from "../../../assets/images/Landing/eclipse1.svg";
import eclipse2 from "../../../assets/images/Landing/eclipse2.svg";

const CustomerReview = () => {
  return (
    <div className={classes.main}>
      <div className={classes.introText}>
        <h4>What Our Customers Are Saying About Us</h4>
        <p>
          Hear what some of the children who joined our Tours in the past has to
          say about the quality and effectiveness each Tour in different
          countries of interest.
        </p>
      </div>
      <div className={classes.cardReview}>
        <div className={classes.review1}>
          <div className={classes.cardDetail}>
            <div className={classes.person}>
              <img src={cynthia} alt="" />
            </div>
            <h4>Cynthia Obi</h4>
            <span>Student</span>
            <p>
              {" "}
              I am glad my parents allowed me to join the tour to the united
              kingdom. I met children from other schools and had grat fun.
            </p>
          </div>
        </div>
        <div className={classes.review1}>
          <div className={classes.cardDetail}>
            <div className={classes.person}>
              <img src={darasimi} alt="" />
            </div>
            <h4>Darasimi Oyebola</h4>
            <span>Student</span>
            <p>
              {" "}
              I’m so glad i joined the educational holiday tour in the United
              State of America, i learnt a lot of things outside what i have
              been thought in class, made new friends and also had great fun.
              Thank you Empire Travel Group for this memorable experience.
            </p>
          </div>
        </div>
        <div className={classes.review1}>
          <div className={classes.cardDetail}>
            <div className={classes.person}>
              <img src={paul} alt="" />
            </div>
            <h4>Paul Adams</h4>
            <span>Student</span>
            <p>
              {" "}
              I would have been sad if i wasn’t opportune to partake in the
              tour, i enjoyed myself and learnt a lot of new things.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.eclipse1}>
        <img src={eclipse1} alt="" />
      </div>
      <div className={classes.eclipse2}>
        <img src={eclipse2} alt="" />
      </div>
    </div>
  );
};

export default CustomerReview;
