import React from "react";
import { useIntl } from "react-intl";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

interface SolutionCards {
  id: number;
  header: string;
  desc: string;
  imgSrc: string;
}

const Solutions = () => {
  const intl = useIntl();
  const solutionCards: SolutionCards[] = [
    {
      id: 0,
      header: "Monetization",
      desc: "MonetizationDesc",
      imgSrc: "/media/assets/solutions/receive-money.png",
    },
    {
      id: 1,
      header: "Identity",
      desc: "IdentityDesc",
      imgSrc: "/media/assets/solutions/creativity.png",
    },
    {
      id: 2,
      header: "Governance",
      desc: "GovernanceDesc",
      imgSrc: "/media/assets/solutions/police-station.png",
    },
    {
      id: 3,
      header: "Spatial",
      desc: "SpatialDesc",
      imgSrc: "/media/assets/solutions/3d.png",
    },
    {
      id: 4,
      header: "AutoBot",
      desc: "AutoBotDesc",
      imgSrc: "/media/assets/solutions/auto-bot.svg",
    },
    {
      id: 5,
      header: "SmartView",
      desc: "SmartViewDesc",
      imgSrc: "/media/assets/solutions/pie-chart.png",
    },
  ];
  return (
    <div className="solutions">
      <div className="container">
        <img
          src="/media/assets/icons/union-group-4.svg"
          alt="star-icon"
          className="union-group-4"
        />
        <h3 className="gradient-text">
          {intl.formatMessage({ id: "Solutions" })}
        </h3>
        <p>{intl.formatMessage({ id: "SolutionsSubHeader" })}</p>
        <div className="solutions-cards">
          {solutionCards.map((card) => (
            <div key={card.id} className="solutions-card">
              {/* <img src={card.imgSrc} alt="solution-img" /> */}
              <ImageBlurHash
                src={card.imgSrc}
                hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                height={200}
                alt="solution-img"
                classes=""
              />
              <h4>{intl.formatMessage({ id: card.header })}</h4>
              <p>{intl.formatMessage({ id: card.desc })}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
