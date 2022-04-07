// import classes from "./landing.module.css";
import Hero from "../../components/Landing/Hero/hero";
import Footer from "../../components/UI/Footer/footer";
import Partners from "../../components/Landing/Partners/partners";
import Cities from "../../components/Landing/Cities/cities";
import WhyUs from "../../components/Landing/WhyUs/whyUs";
import Cores from "../../components/Landing/Cores/cores"
import HomeTour from "../../components/Landing/HomeTour/homeTour";
import Calender from "../../components/Landing/Calender/calender";
import CustomerReview from "../../components/Landing/CustomerReview/customerReview";
import Blog from "../../components/Landing/Blog/blog";
import Subscribe from "../../components/Landing/Subscribe/subscribe";

const Landing = () => {
  return (
    <>
      <main>
        <Hero />
        <Partners />
        <Cities />
        <WhyUs />
        <Cores />
        <HomeTour />
        <Calender />
        <CustomerReview />
        <Blog />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
