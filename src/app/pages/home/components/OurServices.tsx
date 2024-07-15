import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import BlurColoredBg from "../../../shared/components/BlurColoredBg";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

interface ServiceCard {
  id: number;
  header: string;
  desc: string;
  imgSrc: string;
  bgColor: string;
  location: string;
}

const OurServices = () => {
  const intl = useIntl();
  const serviceCards: ServiceCard[] = [
    {
      id: 0,
      header: "Photography",
      desc: "PhotographyDesc",
      imgSrc: "photography.jpg",
      bgColor: "rgba(162, 74, 255, 0.2)",
      location: "left",
    },
    {
      id: 1,
      header: "DataManagement",
      desc: "DataManagementDesc",
      imgSrc: "computer.png",
      bgColor: "rgba(255, 153, 0, 0.2)",
      location: "left",
    },
    {
      id: 2,
      header: "IntegrationsDataSystem",
      desc: "IntegrationsDataSystemDesc",
      imgSrc: "integration.png",
      bgColor: "rgba(156, 208, 255, 0.2)",
      location: "left",
    },
    {
      id: 3,
      header: "BusinessSolutions",
      desc: "BusinessSolutionsDesc",
      imgSrc: "business.svg",
      bgColor: "rgba(80, 181, 255, 0.2)",
      location: "middle",
    },
    {
      id: 4,
      header: "DataVisualization",
      desc: "DataVisualizationDesc",
      imgSrc: "computer.png",
      bgColor: "rgba(252, 255, 123, 0.2)",
      location: "middle",
    },
    {
      id: 5,
      header: "GISSystem",
      desc: "GISSystemDesc",
      imgSrc: "gis.png",
      bgColor: "rgba(255, 31, 0, 0.2)",
      location: "middle",
    },
    {
      id: 6,
      header: "QualityControlQC",
      desc: "QualityControlQCDesc",
      imgSrc: "search.png",
      bgColor: "rgba(111, 255, 99, 0.2)",
      location: "right",
    },
    {
      id: 7,
      header: "Monetization",
      desc: "MonetizationDesc",
      imgSrc: "monetization.png",
      bgColor: "rgba(91, 201, 194, 0.2)",
      location: "right",
    },
    {
      id: 8,
      header: "ResearchDevelopmentRD",
      desc: "ResearchDevelopmentRDDesc",
      imgSrc: "research.png",
      bgColor: "rgba(255, 187, 139, 0.2)",
      location: "right",
    },
  ];

  return (
    <div className="our-services position-relative overflow-hidden">
      <BlurColoredBg />
      <div className="container">
        <img
          src="/media/assets/icons/union-gradient-rotated.svg"
          alt="star-icon"
          className="union-rotated"
        />
        <img
          src="/media/assets/icons/union-red.svg"
          alt="star-icon"
          className="union-red-1"
        />
        <img
          src="/media/assets/icons/union-red.svg"
          alt="star-icon"
          className="union-red-2"
        />
        <img
          src="/media/assets/icons/union-purple.svg"
          alt="star-icon"
          className="union-purple-1"
        />
        <img
          src="/media/assets/icons/union-purple.svg"
          alt="star-icon"
          className="union-purple-2"
        />
        <img
          src="/media/assets/icons/union-gradient-blue.svg"
          alt="star-icon"
          className="union-gradient-blue"
        />
        <div className="test"></div>
        <h3 className="gradient-text">
          {intl.formatMessage({ id: "OurServices" })}
        </h3>
        <p> {intl.formatMessage({ id: "OurServicesDesc" })}</p>
        <div className="cards-container">
          <div className="left-column">
            {serviceCards
              .filter((card) => card.location === "left")
              .map((card) => (
                <div
                  key={card.id}
                  className="service-card"
                  style={{ background: card.bgColor }}
                >
                  {/* <img
                    src={`/media/assets/ourServices/${card.imgSrc}`}
                    alt="service-img"
                  /> */}
                  <ImageBlurHash
                    src={`/media/assets/ourServices/${card.imgSrc}`}
                    hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                    height={200}
                    alt="service-img"
                    classes=""
                  />
                  <h4> {intl.formatMessage({ id: card.header })}</h4>
                  <p> {intl.formatMessage({ id: card.desc })}</p>
                </div>
              ))}
          </div>
          <div className="middle-column">
            {serviceCards
              .filter((card) => card.location === "middle")
              .map((card) => (
                <div
                  key={card.id}
                  className="service-card"
                  style={{ background: card.bgColor }}
                >
                  <img
                    src={`/media/assets/ourServices/${card.imgSrc}`}
                    alt="service-img"
                  />
                  <h4> {intl.formatMessage({ id: card.header })}</h4>
                  <p> {intl.formatMessage({ id: card.desc })}</p>
                </div>
              ))}
            <Link to={"/services"}>
              <button className="btn-our-services mx-auto d-md-flex d-none">
                <span>{intl.formatMessage({ id: "AllServices" })}</span>
                <img
                  src="/media/assets/icons/send-white.svg"
                  alt="forward-arrow"
                />
              </button>
            </Link>
          </div>
          <div className="right-column">
            {serviceCards
              .filter((card) => card.location === "right")
              .map((card) => (
                <div
                  key={card.id}
                  className="service-card"
                  style={{ background: card.bgColor }}
                >
                  <img
                    src={`/media/assets/ourServices/${card.imgSrc}`}
                    alt="service-img"
                  />
                  <h4> {intl.formatMessage({ id: card.header })}</h4>
                  <p> {intl.formatMessage({ id: card.desc })}</p>
                </div>
              ))}
          </div>
          <Link to={"/services"}>
            <button className="btn-our-services mx-auto d-md-none d-flex">
              <span>{intl.formatMessage({ id: "AllServices" })}</span>
              <img
                src="/media/assets/icons/send-white.svg"
                alt="forward-arrow"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
