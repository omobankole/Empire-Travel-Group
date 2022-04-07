import classes from "./partners.module.css";
import partner1 from "../../../assets/images/Landing/partner1.svg";
import partner2 from "../../../assets/images/Landing/partner2.svg";
import partner3 from "../../../assets/images/Landing/partner3.svg";
import partner4 from "../../../assets/images/Landing/partner4.svg";

const Partners = () => {
    return (
<div className={classes.main}>
    <div>
    <h3>Our Trusted Partners</h3>
    <div className={classes.partnerAll}>
        <div className={classes.partner1}>
            <img src={partner1} alt="partners" />
        </div>
        <div className={classes.partner1}>
            <img src={partner2} alt="partners" />
        </div>
        <div className={classes.partner1}>
            <img src={partner3} alt="partners" />
        </div>
        <div className={classes.partner1}>
            <img src={partner4} alt="partners" />
        </div>
    </div>
    </div>
</div>
    )

}

export default Partners;