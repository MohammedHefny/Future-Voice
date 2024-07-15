import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

const About = () => {
  const intl = useIntl();
  return (
    <div className="about-us-container page">
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
          <ImageBlurHash
            src="/media/assets/about-us-img.png"
            hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
            height={200}
            alt="about-us"
            classes=""
          />
          {/* <img src="/media/assets/about-us-img.png" alt="about-us" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
