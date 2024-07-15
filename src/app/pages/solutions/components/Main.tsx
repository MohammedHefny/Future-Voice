import React from "react";
import { useIntl } from "react-intl";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

const Main = () => {
  const intl = useIntl();
  return (
    <div className="main">
      <div className="trapezoid-underlay">
        {/* <img
          className="w-100"
          src="/media/assets/solutions/trapezoid-shape.svg"
          alt="trapezoid-underlay"
        /> */}
        <ImageBlurHash
          hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
          height={200}
          src="/media/assets/solutions/trapezoid-shape.svg"
          alt="trapezoid-underlay"
          classes="trapezoid-underlay"
        />
      </div>
      <div className="container">
        <h2>
          <img src="/media/assets/solutions/icon_symbol.png" alt="4e-logo" />
          <img src="/media/assets/solutions/business-core.png" alt="4e-logo" />
        </h2>
        <p>{intl.formatMessage({ id: "OurSolutionsSubHeader" })}</p>
        <div className="demo-img">
          {/* <img
            src="/media/assets/solutions/solutions-main.png"
            alt="solutions-main"
            className="w-100"
          /> */}
          <ImageBlurHash
            hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
            height={200}
            src="/media/assets/solutions/solutions-main.png"
            alt="solutions-main"
            classes="w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
