import React from "react";
import { useIntl } from "react-intl";

const WhatWeOffer = () => {
  const intl = useIntl();
  return (
    <div className="what-we-offer">
      <div className="container">
        <div className="cards-cols">
          <div className="first-col">
            <div className="offer-card">
              <img
                className="offer-card-img"
                src="/media/assets/3d-target-1.png"
                alt="card-img"
              />
              <p>{intl.formatMessage({ id: "Efficiency" })}</p>
            </div>
            <div className="offer-card">
              <img
                className="offer-card-img"
                src="/media/assets/motivation-1.png"
                alt="card-img"
              />
              <p>{intl.formatMessage({ id: "Empowerment" })}</p>
            </div>
          </div>
          <div className="second-col">
            <div className="offer-card">
              <img
                className="offer-card-img"
                src="/media/assets/wand-1.png"
                alt="card-img"
              />
              <p>{intl.formatMessage({ id: "Effectiveness" })}</p>
            </div>
            <div className="offer-card">
              <img
                className="offer-card-img"
                src="/media/assets/disco-ball-1.png"
                alt="card-img"
              />
              <p>{intl.formatMessage({ id: "Enjoyment" })}</p>
            </div>
          </div>
        </div>
        <div className="offer-info">
          <h3>{intl.formatMessage({ id: "WhatWeOffers" })}</h3>
          <p>{intl.formatMessage({ id: "WhatWeOffersHeader" })}</p>
          <p>{intl.formatMessage({ id: "WhatWeOffersSubHeader" })}</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
