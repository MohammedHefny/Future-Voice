import { useIntl } from "react-intl";

const Kpis = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/svgexport.svg" alt="" />
        <h2>{intl.formatMessage({ id: "KPI" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "KPIDesc" })}</p>
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-between gap-4">
        <img
          src="/media/assets/services/Kpis-img-1.svg"
          alt=""
          className="w-100 w-md-50"
        />
        <img
          src="/media/assets/services/Kpis-img-2.svg"
          alt=""
          className="w-100 w-md-50"
        />
      </div>
    </div>
  );
};

export default Kpis;
