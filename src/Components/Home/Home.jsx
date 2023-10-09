import { useEffect } from "react";
import Banner from "../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "../Services/Services";

const Home = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="2000">
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
