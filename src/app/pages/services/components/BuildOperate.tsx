import { useIntl } from "react-intl";

const BuildOperate = () => {
  const intl = useIntl();
  return (
    <div className="service-details-wrapper">
      <div className="d-flex align-items-center gap-3 service-title">
        <img src="/media/assets/services/chatbot.svg" alt="" />
        <h2>{intl.formatMessage({ id: "BuildOperate" })}</h2>
      </div>
      <p>{intl.formatMessage({ id: "BuildOperateDesc" })}</p>
      <img
        src="/media/assets/services/BuildOperate.svg"
        alt=""
        className="w-100"
      />
    </div>
  );
};

export default BuildOperate;
