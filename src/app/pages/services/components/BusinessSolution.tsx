import { useIntl } from "react-intl";

const BusinessSolution = () => {
  const intl = useIntl();

  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/services-business.svg" alt="" />
        <h2>{intl.formatMessage({ id: "Advertising" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "AdvertisingDesc" })}</p>
      <img src="/media/assets/services/business.svg" alt="" className="w-100" />
    </div>
  );
};

export default BusinessSolution;
