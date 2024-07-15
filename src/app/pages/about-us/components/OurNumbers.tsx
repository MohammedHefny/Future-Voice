import { useIntl } from "react-intl";

const OurNumbers = () => {
  const intl = useIntl();
  return (
    <div className="our-numbers-section">
      <img
        src="/media/assets/icons/union-purple.svg"
        alt="star-icon"
        className="union-icon union-purple"
      />
      <img
        src="/media/assets/icons/union-blue-small.svg"
        alt="star-icon"
        className="union-icon union-blue-small"
      />
      <img
        src="/media/assets/icons/union-yellow.svg"
        alt="star-icon"
        className="union-icon union-yellow"
      />
      <img
        src="/media/assets/icons/union-red.svg"
        alt="star-icon"
        className="union-icon union-red"
      />
      <img
        src="/media/assets/icons/union-gradient-blue.svg"
        alt="star-icon"
        className="union-icon union-gradient-blue"
      />
      <div className="our-numbers-header">
        <p className="linear-gradient-text ">
          {intl.formatMessage({
            id: "OurNumbers",
          })}
        </p>
        <h2>
          {intl.formatMessage({
            id: "HereCloserLook",
          })}
        </h2>
        <h3 className="whiteSpace__preWrap">
          {intl.formatMessage({
            id: "DiscoverHowWe",
          })}
        </h3>
      </div>
      <div className="our-numbers-content">
        <div className="our-numbers-card">
          <img src="/media/assets/icons/startup.png" alt="icon" />
          <span className="linear-gradient-text">
            {intl.formatMessage({
              id: "+220",
            })}
          </span>
          <p>
            {intl.formatMessage({
              id: "OurProjects",
            })}
          </p>
        </div>
        <div className="our-numbers-card">
          <img src="/media/assets/icons/teamwork.png" alt="icon" />
          <span className="linear-gradient-text">
            {intl.formatMessage({
              id: "+100",
            })}
          </span>
          <p>
            {intl.formatMessage({
              id: "OurTeams",
            })}
          </p>
        </div>
        <div className="our-numbers-card">
          <img src="/media/assets/icons/cool.png" alt="icon" />
          <span className="linear-gradient-text">
            {intl.formatMessage({
              id: "+34",
            })}
          </span>
          <p>
            {intl.formatMessage({
              id: "OurClients",
            })}
          </p>
        </div>
        <div className="our-numbers-card">
          <img src="/media/assets/icons/bitmap.png" alt="icon" />
          <span className="linear-gradient-text">
            {intl.formatMessage({
              id: "+80",
            })}
          </span>
          <p>
            {intl.formatMessage({
              id: "OurExperience",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;
