import React from "react";
import { useIntl } from "react-intl";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

interface Project {
  icon: string;
  images: string[];
  titleId: string;
  descriptionIds: string[];
}

const projects: Project[] = [
  {
    icon: "/media/assets/icons/01.png",
    images: [
      "/media/assets/aboutUs/real state.png",
      "/media/assets/aboutUs/4explain-logo.png",
      "/media/assets/aboutUs/governance.png",
    ],
    titleId: "GovernmentSector",
    descriptionIds: [
      "OnePlatformForManagingPerformance",
      "OperationalSupportAndManagement",
      "ProvidingAdvisoryAndTechnical",
    ],
  },
  {
    icon: "/media/assets/icons/02.png",
    images: [
      "/media/assets/aboutUs/King Abd.svg",
      "/media/assets/aboutUs/governance.png",
    ],
    titleId: "GovernmentSector",
    descriptionIds: [
      "DevelopingTheExternalPortal",
      "IntegrationWithExternalSystems",
    ],
  },
  {
    icon: "/media/assets/icons/03.png",
    images: [
      "/media/assets/aboutUs/National center.png",
      "/media/assets/aboutUs/governance.png",
    ],
    titleId: "GovernmentSector",
    descriptionIds: ["DevelopingTheExternalPortal"],
  },
  {
    icon: "/media/assets/icons/04.png",
    images: [
      "/media/assets/aboutUs/TGA.png",
      "/media/assets/aboutUs/governance.png",
    ],
    titleId: "GovernmentSector",
    descriptionIds: ["DocumentArchivingContent"],
  },
];

const milestones = [
  {
    id: 0,
    index: "01",
    sector: "GovernmentSector",
    sectorImg: "/media/assets/solutions/governance.png",
    clientImg: "/media/assets/clients/REGA.png",
    points: [
      "OnePlatformForManagingPerformance",
      "OperationalSupportAndManagement",
      "ProvidingAdvisoryAndTechnical",
    ],
  },
  {
    id: 1,
    index: "02",
    sector: "GovernmentSector",
    sectorImg: "/media/assets/solutions/governance.png",
    clientImg: "/media/assets/clients/KingAbdulAzizFoundation.svg",
    points: ["DevelopingTheExternalPortal", "IntegrationWithExternalSystems"],
  },
  {
    id: 2,
    index: "03",
    sector: "GovernmentSector",
    sectorImg: "/media/assets/solutions/governance.png",
    clientImg: "/media/assets/clients/NCVC.png",
    points: ["DevelopingTheExternalPortal"],
  },
  {
    id: 3,
    index: "04",
    sector: "GovernmentSector",
    sectorImg: "/media/assets/solutions/governance.png",
    clientImg: "/media/assets/clients/TGA.png",
    points: ["DocumentArchivingContent"],
  },
];

const SuccessStory: React.FC = () => {
  const intl = useIntl();

  return (
    <div className="success-story-section">
      <div className="success-story-header">
        <p className="linear-gradient-text">
          {intl.formatMessage({ id: "OurSuccessStory" })}
        </p>
        <h2>{intl.formatMessage({ id: "SomeAchievementsInWork" })}</h2>
      </div>
      <div>
        <img
          src="/media/assets/icons/crossed-checkered-flags.png"
          alt="checkered flag icon"
        />
      </div>
      <div className="milestone-section">
        <div className="container">
          <div className="milestones-header">
            <h3>{intl.formatMessage({ id: "Milestone" })}</h3>
            <p className="whiteSpace__preWrap">
              {intl.formatMessage({ id: "MilestoneDesc" })}
            </p>
            <img
              src="/media/assets/icons/crossed-checkered-flags.png"
              alt="checkered flag icon"
            />
          </div>
          <div className="milestones d-md-grid d-none">
            <div className="dotted-line success-story"></div>
            {milestones.map((milestone) => (
              <div className="milestone">
                <div className="ellipse"></div>
                <div className="milestone-index">{milestone.index}</div>
                <div className="milestone-info">
                  <div className="header">
                    <ImageBlurHash
                      src={milestone.clientImg}
                      hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                      height={200}
                      alt="client-logo"
                      classes=""
                    />
                    <ImageBlurHash
                      src={milestone.sectorImg}
                      hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                      height={200}
                      alt="sector-logo"
                      classes=""
                    />
                    {/* <img src={milestone.clientImg} alt="client-logo" /> */}
                    {/* <img src={milestone.sectorImg} alt="sector-logo" /> */}
                    <p>{intl.formatMessage({ id: milestone.sector })}</p>
                  </div>
                  <div className="points">
                    {milestone.points.map((point) => (
                      <div className="point">
                        <img
                          src="/media/assets/tick-circle.svg"
                          alt="tick-circle"
                        />
                        <p>{intl.formatMessage({ id: point })}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="milestones-mobile d-flex d-md-none">
            {milestones.map((milestone) => (
              <>
                <div className="milestone">
                  <div className="milestone-index">{milestone.index}</div>
                  <div className="header">
                    <img src={milestone.clientImg} alt="client-logo" />
                    <div className="sector">
                      <ImageBlurHash
                        src={milestone.sectorImg}
                        hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                        height={200}
                        alt="sector-logo"
                        classes=""
                      />
                      {/* <img src={milestone.sectorImg} alt="sector-logo" /> */}
                      <p>{intl.formatMessage({ id: milestone.sector })}</p>
                    </div>
                  </div>
                  <div className="milestone-info">
                    <div className="points">
                      {milestone.points.map((point) => (
                        <div className="point">
                          {/* <img
                            src="/media/assets/tick-circle.svg"
                            alt="tick-circle"
                          /> */}
                          <ImageBlurHash
                            hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                            height={100}
                            src="/media/assets/tick-circle.svg"
                            alt="tick-circle"
                            classes=""
                          />
                          <p>{intl.formatMessage({ id: point })}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="dashed-line"></div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
