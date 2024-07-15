import { useIntl } from "react-intl";

const CLevel = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/command.svg" alt="" />
        <h2>{intl.formatMessage({ id: "CLevel" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "CLevelDesc" })}</p>
      <img src="/media/assets/services/C-Level.svg" alt="" className="w-100" />
    </div>
  );
};

export default CLevel;
