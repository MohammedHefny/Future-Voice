import { useIntl } from "react-intl";

const Robotic = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/robot.svg" alt="" />
        <h2>{intl.formatMessage({ id: "Robotic" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "RoboticDesc" })}</p>
      <img src="/media/assets/services/Robotic.svg" alt="" className="w-100" />
    </div>
  );
};

export default Robotic;
