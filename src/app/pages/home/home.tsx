import { FC } from "react";
import HeroBanner from "./components/HeroBanner";
import AboutUs from "./components/AboutUs";
import WhatWeOffer from "./components/WhatWeOffer";
import Solutions from "./components/Solutions";
import OurProject from "./components/OurProject";
import OurServices from "./components/OurServices";

const Home: FC = () => {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <WhatWeOffer />
      <Solutions />
      <OurProject />
      <OurServices />
    </>
  );
};

export { Home };
