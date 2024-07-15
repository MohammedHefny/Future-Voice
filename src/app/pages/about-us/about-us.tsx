import { FC } from "react";
import WhyUs from "./components/WhyUs";
import OurNumbers from "./components/OurNumbers";
import SuccessStory from "./components/SuccessStory";
import About from "./components/About";
import StayInformed from "../../shared/components/StayInformed";
import ClientsSlider from "../home/components/ClientsSlider";

const AboutUs: FC = () => {
  return (
    <div className="about-us-wrapper">
      <About/>
      <WhyUs/>
      <OurNumbers/>
      <ClientsSlider/>
      <SuccessStory/>
      <StayInformed/>
    </div>
  );
};

export default AboutUs;
