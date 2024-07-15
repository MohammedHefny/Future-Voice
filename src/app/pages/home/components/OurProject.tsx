import React from "react";
import { useIntl } from "react-intl";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

const OurProject = () => {
  const intl = useIntl();
  return (
    <div className="our-project">
      <div className="container">
        <img
          src="/media/assets/icons/union-group-3.svg"
          alt="star-icon"
          className="union-group-3"
        />
        <h3>{intl.formatMessage({ id: "OurProject" })}</h3>
        <p>{intl.formatMessage({ id: "OurProjectHeader" })}</p>
        <p>{intl.formatMessage({ id: "OurProjectSubHeader" })}</p>
        <div className="get-started">
          <div className="get-started-icon">
            {/* <img src="/media/assets/icons/polygon.svg" alt="polygon" /> */}
            <ImageBlurHash
              src="/media/assets/icons/polygon.svg"
              hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
              height={100}
              alt="polygon"
              classes=""
            />
          </div>
          <span className="get-started">
            {intl.formatMessage({ id: "GetStarted" })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
