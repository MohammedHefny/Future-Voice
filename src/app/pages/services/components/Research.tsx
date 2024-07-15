import { useIntl } from "react-intl";

const Research = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/research.svg" alt="" />
        <h2>{intl.formatMessage({ id: "RAndDDesc1" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "RAndD1" })}</p>
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-between gap-4">
        <div className="w-100 w-md-75 integrstion-details">
          <h3>{intl.formatMessage({ id: "RAndD2" })}</h3>
          <p>{intl.formatMessage({ id: "RAndDDesc2" })}</p>
          <h3>{intl.formatMessage({ id: "RAndD3" })}</h3>
          <p>{intl.formatMessage({ id: "RAndDDesc3" })}</p>
          <h3>{intl.formatMessage({ id: "RAndD4" })}</h3>
          <p>{intl.formatMessage({ id: "RAndDDesc4" })}</p>
          <h3>{intl.formatMessage({ id: "RAndD5" })}</h3>
          <p>{intl.formatMessage({ id: "RAndDDesc5" })}</p>
        </div>
        <img
          src="/media/assets/services/Research-img.svg"
          alt=""
          className="w-100 w-md-25"
        />
      </div>
    </div>
  );
};

export default Research;
