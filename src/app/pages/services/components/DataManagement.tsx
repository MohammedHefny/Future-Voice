import { useIntl } from "react-intl";

const DataManagement = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/server.svg" alt="" />
        <h2>{intl.formatMessage({ id: "DataManag" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "DataManagDesc" })}</p>
      <img
        src="/media/assets/services/DataManagement.svg"
        alt=""
        className="w-100"
      />
    </div>
  );
};

export default DataManagement;
