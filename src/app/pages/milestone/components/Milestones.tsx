import { useIntl } from "react-intl";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

const Milestones = () => {
  const intl = useIntl();
  const milestones = [
    {
      id: 0,
      index: "01",
      sector: "GovernmentSector",
      sectorImg: "/media/assets/solutions/governance.png",
      clientImg: "/media/assets/clients/REGA.png",
      points: ["Milestone01P1", "Milestone01P2", "Milestone01P3"],
    },
    {
      id: 1,
      index: "02",
      sector: "GovernmentSector",
      sectorImg: "/media/assets/solutions/governance.png",
      clientImg: "/media/assets/clients/KingAbdulAzizFoundation.svg",
      points: ["Milestone02P1", "Milestone02P2"],
    },
    {
      id: 2,
      index: "03",
      sector: "GovernmentSector",
      sectorImg: "/media/assets/solutions/governance.png",
      clientImg: "/media/assets/clients/NCVC.png",
      points: ["Milestone03P1"],
    },
    {
      id: 3,
      index: "04",
      sector: "GovernmentSector",
      sectorImg: "/media/assets/solutions/governance.png",
      clientImg: "/media/assets/clients/TGA.png",
      points: ["Milestone04P1"],
    },
    {
      id: 4,
      index: "05",
      sector: "PrivateSector",
      sectorImg: "/media/assets/solutions/office-building.png",
      clientImg: "/media/assets/clients/Cardial.png",
      points: ["Milestone05P1"],
    },
    {
      id: 5,
      index: "06",
      sector: "HealthSector",
      sectorImg: "/media/assets/solutions/hospital.png",
      clientImg: "/media/assets/clients/Davita.png",
      points: ["Milestone06P1"],
    },
    {
      id: 6,
      index: "07",
      sector: "GovernmentSector",
      sectorImg: "/media/assets/solutions/governance.png",
      clientImg: "/media/assets/clients/AseerMakkah.png",
      points: [
        "Milestone07P1",
        "Milestone07P2",
        "Milestone07P3",
        "Milestone07P4",
        "Milestone07P5",
        "Milestone07P6",
      ],
    },
    {
      id: 7,
      index: "08",
      sector: "EducationSector",
      sectorImg: "/media/assets/solutions/education.png",
      clientImg: "/media/assets/clients/KingSaudUni.png",
      points: ["Milestone08P1", "Milestone08P2", "Milestone08P3"],
    },
    {
      id: 8,
      index: "09",
      sector: "Communications",
      sectorImg: "/media/assets/solutions/hypervisor.png",
      clientImg: "/media/assets/clients/STC.png",
      points: ["Milestone09P1", "Milestone09P2", "Milestone09P3"],
    },
    {
      id: 9,
      index: "10",
      sector: "DucatusPlatform",
      sectorImg: "/media/assets/solutions/governance.png",
      clientImg: "/media/assets/clients/Ducatus.png",
      points: [
        "Milestone10P1",
        "Milestone10P2",
        "Milestone10P3",
        "Milestone10P4",
      ],
    },
  ];
  return (
    <div className="milestones-page">
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
            <div className="dotted-line"></div>
            {milestones.map((milestone) => (
              <div className="milestone">
                <div className="ellipse"></div>
                <div className="milestone-index">{milestone.index}</div>
                <div className="milestone-info">
                  <div className="header">
                    {/* <img src={milestone.clientImg} alt="client-logo" /> */}
                    <ImageBlurHash
                      hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                      height={200}
                      src={milestone.clientImg}
                      alt="client-logo"
                      classes=""
                    />
                    {/* <img src={milestone.sectorImg} alt="sector-logo" /> */}
                    <ImageBlurHash
                      hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                      height={200}
                      src={milestone.sectorImg}
                      alt="sector-logo"
                      classes=""
                    />
                    <p>{intl.formatMessage({ id: milestone.sector })}</p>
                  </div>
                  <div className="points">
                    {milestone.points.map((point) => (
                      <div className="point">
                        {/* <img
                          src="/media/assets/tick-circle.svg"
                          alt="tick-circle"
                        /> */}
                        <ImageBlurHash
                          hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                          height={200}
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
            ))}
          </div>
          <div className="milestones-mobile d-flex d-md-none">
            {milestones.map((milestone) => (
              <>
                <div className="milestone">
                  <div className="milestone-index">{milestone.index}</div>
                  <div className="header">
                    {/* <img src={milestone.clientImg} alt="client-logo" /> */}
                    <ImageBlurHash
                      hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                      height={200}
                      src={milestone.clientImg}
                      alt="client-logo"
                      classes=""
                    />
                    <div className="sector">
                      <img src={milestone.sectorImg} alt="sector-logo" />
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
                            height={200}
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

export default Milestones;
