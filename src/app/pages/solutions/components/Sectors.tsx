import React, { useState } from "react";
import { useIntl } from "react-intl";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

const Sectors = () => {
  const intl = useIntl();
  const ourSectors = [
    {
      id: 0,
      name: "Governance",
      icon: "/media/assets/solutions/governance.png",
      className: "col-md-4",
    },
    {
      id: 1,
      name: "Photography",
      icon: "/media/assets/solutions/mining.png",
      className: "col-md-4",
    },
    {
      id: 2,
      name: "TravelTourism",
      icon: "/media/assets/solutions/travel-bag.png",
      className: "col-md-4",
    },
    {
      id: 3,
      name: "Industry",
      icon: "/media/assets/solutions/factory.png",
      className: "col-md-3",
    },
    {
      id: 4,
      name: "Education",
      icon: "/media/assets/solutions/education.png",
      className: "col-md-3",
    },
    {
      id: 5,
      name: "Health",
      icon: "/media/assets/solutions/hospital.png",
      className: "col-md-2",
    },
    {
      id: 6,
      name: "ContentCreation",
      icon: "/media/assets/solutions/ship.png",
      className: "col-md-4",
    },
    {
      id: 7,
      name: "ECommerce",
      icon: "/media/assets/solutions/buy.png",
      className: "col-md-4",
    },
    {
      id: 8,
      name: "websiteDevelopment",
      icon: "/media/assets/solutions/hypervisor.png",
      className: "col-md-8",
    },
    {
      id: 9,
      name: "ElectronicResearchDevelopment",
      icon: "/media/assets/solutions/pc.png",
      className: "col-md-9",
    },
  ];
  return (
    <div className="sectors">
      <div className="container">
        <div className="header">
          <h3>{intl.formatMessage({ id: "OurSectors" })}</h3>
          <p>{intl.formatMessage({ id: "ReachUsHeader" })}</p>
          <p className="whiteSpace__preWrap">
            {intl.formatMessage({ id: "ReachUsSubHeader" })}
          </p>
        </div>
        <div className="sectors-wrapper">
          {ourSectors.map((sector) => {
            return (
              <div className={` ${sector.className}`}>
                <div className={`sector-card col-12`} key={sector.id}>
                  {/* <img src={sector.icon} alt="sector icon" /> */}
                  <ImageBlurHash
                    hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                    height={100}
                    src={sector.icon}
                    alt="sector icon"
                    classes=""
                  />
                  <h4>{intl.formatMessage({ id: sector.name })}</h4>
                </div>
              </div>
            );
          })}
          <div className=" col-md-3">
            <div className="sector-card col-12">
              <h4>+10</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectors;
