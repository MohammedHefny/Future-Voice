import { useIntl } from "react-intl";

const Integrations = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/integration.svg" alt="" />
        <h2>{intl.formatMessage({ id: "photography" })}</h2>
      </div>
      {/* <p>{intl.formatMessage({ id: "photographyDesc" })}</p> */}
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-between gap-4">
        <div className="w-100 w-md-75 integrstion-details">
          {/* <h3>{intl.formatMessage({ id: "Integrations2" })}</h3> */}
          <p>{intl.formatMessage({ id: "photographyDesc" })}</p>
          {/* <h3>{intl.formatMessage({ id: "Integrations3" })}</h3> */}
          {/* <p>{intl.formatMessage({ id: "IntegrationsDesc3" })}</p> */}
        </div>
        <img
          src="/media/assets/services/photography.jpg"
          alt="photography"
          className="w-50 w-md-25"
        />
      </div>
    </div>
  );
};

export default Integrations;
