import { useIntl } from "react-intl";

const ArtificialIntelligence = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/ai.svg" alt="" />
        <h2>{intl.formatMessage({ id: "AI" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "AIDesc" })}</p>
      <img
        src="/media/assets/services/ArtificialIntelligence.svg"
        alt=""
        className="w-100"
      />
    </div>
  );
};

export default ArtificialIntelligence;
