import { useIntl } from "react-intl";

const Monetization = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/Monetization.svg" alt="" />
        <h2>{intl.formatMessage({ id: "Moneti" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "MonetiDesc" })}</p>
      <img
        src="/media/assets/services/MonetizationDetails.svg"
        alt=""
        className="w-100"
      />
    </div>
  );
};

export default Monetization;
