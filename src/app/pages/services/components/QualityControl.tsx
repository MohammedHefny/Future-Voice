import { useIntl } from "react-intl";

const QualityControl = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/search.svg" alt="" />
        <h2>{intl.formatMessage({ id: "ContentCreation" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "ContentCreationDesc" })}</p>
      <img src="/media/assets/services/ac-img.svg" alt="" className="w-100" />
    </div>
  );
};

export default QualityControl;
