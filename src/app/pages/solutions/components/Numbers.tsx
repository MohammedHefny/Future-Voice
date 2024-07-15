import React from "react";
import { useIntl } from "react-intl";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

interface NumbersCard {
  id: number;
  numbers: string;
  section: string;
  imgSrc: string;
}

const Numbers = () => {
  const intl = useIntl();
  const NumbersCards: NumbersCard[] = [
    {
      id: 0,
      numbers: "+22",
      section: "Sectors",
      imgSrc: "/media/assets/solutions/analytics.png",
    },
    {
      id: 1,
      numbers: "+670",
      section: "Services",
      imgSrc: "/media/assets/solutions/24-hours.png",
    },
    {
      id: 2,
      numbers: "+50",
      section: "Features",
      imgSrc: "/media/assets/solutions/3d-star.png",
    },
    {
      id: 3,
      numbers: "+42",
      section: "SubSystems",
      imgSrc: "/media/assets/solutions/compatible.png",
    },
  ];
  return (
    <div className="numbers">
      <div className="container">
        <h3>{intl.formatMessage({ id: "4ENumbers" })}</h3>
        <p>{intl.formatMessage({ id: "4ENumbersHeader" })}</p>
        <p className="whiteSpace__preWrap">
          {intl.formatMessage({ id: "4ENumbersSubHeader" })}
        </p>
        <div className="numbers-cards">
          {NumbersCards.map((card) => (
            <div className="number-card" key={card.id}>
              {/* <img src={card.imgSrc} alt="card-img" /> */}
              <ImageBlurHash
                hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                height={200}
                src={card.imgSrc}
                alt="card-img"
                classes=""
              />
              <p>{card.numbers}</p>
              <p>{intl.formatMessage({ id: card.section })}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;
