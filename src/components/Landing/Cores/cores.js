import classes from "./cores.module.css";
import CoreProps from "./CoresProps/coreProps";
import Core1 from "../../../assets/images/Landing/core1.svg";
import Core2 from "../../../assets/images/Landing/core2.svg";
import Core3 from "../../../assets/images/Landing/core3.svg";
import Core4 from "../../../assets/images/Landing/core4.svg";
import Core5 from "../../../assets/images/Landing/core5.svg";
import Core6 from "../../../assets/images/Landing/core6.svg";

const Cores = () => {
  return (
    <div className={classes.main}>
      <h3>Our Core Values</h3>
      <div className={classes.coreGrid}>
        <CoreProps
          image={Core1}
          title="Honesty"
          word="For us as a company, it is very important that the information provided to our customers is honest and true. This value is, what makes us different and helps us to  make decisions based on firm and true facts."
        />
        <CoreProps
          image={Core2}
          title="Teamwork"
          word="We have built a team that works result-oriented, unifying talent and give and take to respect and join different opinions, knowledge  and abilities because teamwork and mutual support build the foundation of our relationship."
        />
        <CoreProps
          image={Core3}
          title="Liberty"
          word="Our team member must show loyalty referring to faithfulness, commitment, and interest defense in any moment for and in the name of the company."
        />
        <CoreProps
          image={Core4}
          title="Communication"
          word="Each one of us must interact transparently and appropriately, trying to strengthen our interpersonal relations and the image of the company."
        />
        <CoreProps
          image={Core5}
          title="Service Quality"
          word="Service quality is one of our most important values which demands all our effort, determination and courage to be successful in what we are doing and the services we are providing. "
        />
        <CoreProps
          image={Core6}
          title="Constructive Spirit"
          word="Constructive spirit refers to a positive attitude, optimism,increase of value chain, creativity and good faith that must be shown and lived by those who work in our company . "
        />
      </div>
    </div>
  );
};

export default Cores;
