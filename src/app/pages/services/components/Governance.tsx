import { useIntl } from "react-intl";

const Governance = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/caution.svg" alt="" />
        <h2>{intl.formatMessage({ id: "Govern" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "GovernDesc" })}</p>
      <img
        src="/media/assets/services/Governance.svg"
        alt=""
        className="w-100"
      />
    </div>
  );
};

export default Governance;
