import React from "react";
import { useIntl } from "react-intl";
import ClientsSlider from "./ClientsSlider";
import { Link } from "react-router-dom";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

const AboutUs = () => {
  const intl = useIntl();
  return (
    <div className="about-us-container">
      {/* <img
        src="/media/assets/icons/union-group.svg"
        alt="star-icon"
        className="union-group-1"
      /> */}
      <ImageBlurHash
        src="/media/assets/icons/union-group.svg"
        hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
        height={200}
        alt={"star-icon"}
        classes="union-group-1"
      />
      {/* <img
        src="/media/assets/icons/union-group-2.svg"
        alt="star"
        className="union-group-2"
      /> */}
      <ImageBlurHash
        src="/media/assets/icons/union-group-2.svg"
        hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
        height={200}
        alt={"star"}
        classes="union-group-2"
      />
      <ClientsSlider />
      <div className="container">
        <div className="about-us-info">
          <h3>{intl.formatMessage({ id: "AboutUs" })}</h3>
          <p>{intl.formatMessage({ id: "AboutUsHeader" })}</p>
          <p>{intl.formatMessage({ id: "AboutUsSubHeader" })}</p>
          <Link to={"/about-us"}>
            <button className="btn-our-services">
              <span>{intl.formatMessage({ id: "LearnMore" })}</span>
              <img
                src="/media/assets/icons/send-white.svg"
                alt="forward-arrow"
              />
            </button>
          </Link>
        </div>
        <div className="about-us-img">
          <div className="underlay"></div>
          {/* <img src="/media/assets/about-us-img.png" alt="about-us" /> */}
          <ImageBlurHash
            src="/media/assets/about-us-img.png"
            hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
            height={200}
            alt={"about-us"}
            classes=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
