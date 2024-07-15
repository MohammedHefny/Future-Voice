import { useIntl } from "react-intl";

const Standard = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/Standard.svg" alt="" />
        <h2>{intl.formatMessage({ id: "Standard1" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "StandardDesc1" })}</p>
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-between gap-4">
        <div className="w-100 w-md-75 integrstion-details">
          <h3>{intl.formatMessage({ id: "Standard2" })}</h3>
          <p>{intl.formatMessage({ id: "StandardDesc2" })}</p>
          <h3>{intl.formatMessage({ id: "Standard3" })} </h3>
          <p>{intl.formatMessage({ id: "StandardDesc3" })}  </p>
          <h3>{intl.formatMessage({ id: "Standard4" })}</h3>
          <p>{intl.formatMessage({ id: "StandardDesc4" })}</p>
          <h3>{intl.formatMessage({ id: "Standard5" })}</h3>
          <p>{intl.formatMessage({ id: "StandardDesc5" })}</p>
        </div>
        <img
          src="/media/assets/services/Standard-img.svg"
          alt=""
          className="w-100 w-md-25"
        />
      </div>
    </div>
  );
};

export default Standard;
