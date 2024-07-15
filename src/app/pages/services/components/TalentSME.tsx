import { useIntl } from "react-intl";

const TalentSME = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/sme.svg" alt="" />
        <h2>{intl.formatMessage({ id: "TalentSME" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "TalentSMEDesc" })}</p>
      <img src="/media/assets/services/Talent.svg" alt="" className="w-100" />
    </div>
  );
};

export default TalentSME;
