import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

const ReachUs = () => {
  const intl = useIntl();
  return (
    <div className="reach-us">
      <div className="container d-flex flex-column align-items-center">
        <h3>{intl.formatMessage({ id: "ReachUs" })}</h3>
        <p>{intl.formatMessage({ id: "GetYourFirst" })}</p>
        <p className="whiteSpace__preWrap">
          {intl.formatMessage({ id: "ConnectingWithUs" })}
        </p>
        <Link
          to={"https://Future Voice.net/home"}
          target="_blank"
          className=" text-decoration-none"
        >
          <button className="btn-our-services">
            <span>{intl.formatMessage({ id: "VisitWebsite" })}</span>
            <img src="/media/assets/icons/send-white.svg" alt="forward-arrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReachUs;
