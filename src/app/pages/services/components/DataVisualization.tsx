import { useIntl } from "react-intl";

const DataVisualization = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/computer.svg" alt="" />
        <h2>{intl.formatMessage({ id: "DV" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "DVDesc" })}</p>
      <img
        src="/media/assets/services/DataVisualization.svg"
        alt=""
        className="w-100"
      />
    </div>
  );
};

export default DataVisualization;
