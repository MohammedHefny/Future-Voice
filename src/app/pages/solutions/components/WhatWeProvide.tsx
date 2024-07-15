import React from "react";
import { useIntl } from "react-intl";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

interface ProvideCards {
  id: number;
  desc: string;
  imgSrc: string;
}

const WhatWeProvide = () => {
  const intl = useIntl();
  const provideCards: ProvideCards[] = [
    {
      id: 0,
      desc: "DataManagementDecisionMaking",
      imgSrc: "/media/assets/solutions/database.png",
    },
    {
      id: 1,
      desc: "SoftwareDevelopmentProcess",
      imgSrc: "/media/assets/solutions/setting.png",
    },
    {
      id: 2,
      desc: "CustomizabilityIntegration",
      imgSrc: "/media/assets/solutions/trust.png",
    },
    {
      id: 3,

      desc: "ImprovingDigitalTransformation",
      imgSrc: "/media/assets/solutions/progress.png",
    },
    {
      id: 4,

      desc: "WorkEnvironment",
      imgSrc: "/media/assets/solutions/workflow.png",
    },
    {
      id: 5,
      desc: "OperabilitySafety",
      imgSrc: "/media/assets/solutions/protection.png",
    },
    {
      id: 6,
      desc: "DataTransfer",
      imgSrc: "/media/assets/solutions/folder.png",
    },
    {
      id: 7,
      desc: "PublishingOptions",
      imgSrc: "/media/assets/solutions/cloud-data.png",
    },
  ];
  return (
    <div className="what-we-provide">
      <div className="container">
        <h3>{intl.formatMessage({ id: "WhatWeProvide" })}</h3>
        <p>{intl.formatMessage({ id: "WhatWeProvideHeader" })}</p>
        <p className="whiteSpace__preWrap">
          {intl.formatMessage({ id: "WhatWeProvideSubHeader" })}
        </p>
        <div className="provide-cards">
          {provideCards.map((card) => (
            <div className="provide-card" key={card.id}>
              <img src={card.imgSrc} alt="provide-img" />
              <ImageBlurHash
                hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                height={100}
                src={card.imgSrc}
                alt="provide-img"
                classes=""
              />
              <p className="whiteSpace__preWrap">
                {intl.formatMessage({ id: card.desc })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
