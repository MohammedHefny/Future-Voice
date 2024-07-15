import { useIntl } from "react-intl";

const Consultation = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/management-consulting.svg" alt="" />
        <h2>{intl.formatMessage({ id: "Consultation" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "ConsultationDesc" })}</p>
      <img
        src="/media/assets/services/Consultation.svg"
        alt=""
        className="w-100"
      />
    </div>
  );
};

export default Consultation;
