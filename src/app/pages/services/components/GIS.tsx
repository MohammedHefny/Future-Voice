import { useIntl } from "react-intl";

const GIS = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/gis.svg" alt="" />
        <h2>{intl.formatMessage({ id: "websiteDevelopment" })}</h2>
      </div>
      {/* <p>{intl.formatMessage({ id: "websiteDevelopmentDesc" })}</p> */}
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-between gap-4">
        <div className="w-100 w-md-75 integrstion-details">
          {/* <h3>{intl.formatMessage({ id: "websiteDevelopment" })}</h3> */}
          <p>{intl.formatMessage({ id: "websiteDevelopmentDesc" })}</p>
        </div>
        <img
          src="/media/assets/services/GIS-img-1.svg"
          alt=""
          className="w-100 w-md-25"
        />
      </div>
      {/*  <div className="d-flex flex-wrap flex-md-nowrap justify-content-between gap-4 my-3">
        <img
          src="/media/assets/services/GIS-img-2.svg"
          alt=""
          className="w-100 w-md-25"
        />
        <div className="w-100 w-md-75 integrstion-details">
          <h3>{intl.formatMessage({ id: "GIS3" })}</h3>
          <p>{intl.formatMessage({ id: "GISDesc3" })}</p>
        </div>
      </div>
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-between gap-4">
        <div className="w-100 w-md-75 integrstion-details">
          <h3>{intl.formatMessage({ id: "GIS4" })}</h3>
          <p>{intl.formatMessage({ id: "GISDesc4" })}</p>
        </div>
        <img
          src="/media/assets/services/GIS-img-3.svg"
          alt=""
          className="w-100 w-md-25"
        />
      </div> */}
    </div>
  );
};

export default GIS;
