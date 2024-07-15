import React from "react";
import Main from "./components/Main";
import WhatWeProvide from "./components/WhatWeProvide";
import Numbers from "./components/Numbers";
import ReachUs from "./components/ReachUs";
import Sectors from "./components/Sectors";

const Solutions = () => {
  return (
    <div className="solutions-page">
      {/* <Main /> */}
      <WhatWeProvide />
      <Sectors />
      <Numbers />
      <ReachUs />
    </div>
  );
};

export default Solutions;
