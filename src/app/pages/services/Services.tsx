import { useState } from "react";
import { useIntl } from "react-intl";
import BusinessSolution from "./components/BusinessSolution";
import QualityControl from "./components/QualityControl";
import ArtificialIntelligence from "./components/ArtificialIntelligence";
import DataVisualization from "./components/DataVisualization";
import Robotic from "./components/Robotic";
import CLevel from "./components/C-Level";
import DataManagement from "./components/DataManagement";
import Consultation from "./components/Consultation";
import TalentSME from "./components/TalentSME";
import Monetization from "./components/Monetization";
import Governance from "./components/Governance";
import BuildOperate from "./components/BuildOperate";
import Kpis from "./components/Kpis";
import Integrations from "./components/Integrations";
import Standard from "./components/Standard";
import Research from "./components/Research";
import GIS from "./components/GIS";
import { ScrollFromBottom } from "../../shared/functions/ScrollFromBottom";
import ImageBlurHash from "../../shared/components/imageBlurHash";

const Services = () => {
  const intl = useIntl();
  const [activeService, setActiveService] = useState(1);

  const servicesTypes = [
    {
      id: 1,
      name: "Advertising",
      icon: "/media/assets/services/services-business.svg",
    },
    {
      id: 2,
      name: "ContentCreation",
      icon: "/media/assets/services/search.svg",
    },
    {
      id: 3,
      name: "photography",
      icon: "/media/assets/services/integration.svg",
    },
    {
      id: 4,
      name: "websiteDevelopment",
      icon: "/media/assets/services/gis.svg",
    },
    // {
    //   id: 5,
    //   name: "KPIS",
    //   icon: "/media/assets/services/svgexport.svg",
    // },
    {
      id: 6,
      name: "ArtificialIntelligenceAI",
      icon: "/media/assets/services/ai.svg",
    },
    {
      id: 7,
      name: "GoToStandard",
      icon: "/media/assets/services/standard.svg",
    },
    {
      id: 8,
      name: "DataVisualization",
      icon: "/media/assets/services/computer.svg",
    },
    {
      id: 9,
      name: "ResearchDevelopmentRD",
      icon: "/media/assets/services/research.svg",
    },
    {
      id: 10,
      name: "RoboticProcessAutomationRPA",
      icon: "/media/assets/services/robot.svg",
    },
    {
      id: 11,
      name: "CLevelServices",
      icon: "/media/assets/services/command.svg",
    },
    {
      id: 12,
      name: "DataManagement",
      icon: "/media/assets/services/server.svg",
    },
    {
      id: 13,
      name: "Consultation",
      icon: "/media/assets/services/management-consulting.svg",
    },
    {
      id: 14,
      name: "TalentSME",
      icon: "/media/assets/services/sme.svg",
    },
    {
      id: 15,
      name: "Monetization",
      icon: "/media/assets/services/monetization.svg",
    },
    // {
    //   id: 16,
    //   name: "GovernanceRickComplianceGRC",
    //   icon: "/media/assets/services/caution.svg",
    // },
    // {
    //   id: 17,
    //   name: "BuildOperateTransferBOTContract",
    //   icon: "/media/assets/services/chatbot.svg",
    // },
  ];

  const getActiveService = () => {
    switch (activeService) {
      case 1:
        return <BusinessSolution />;
      case 2:
        return <QualityControl />;
      case 3:
        return <Integrations />;
      case 4:
        return <GIS />;
      case 5:
        return <Kpis />;
      case 6:
        return <ArtificialIntelligence />;
      case 7:
        return <Standard />;
      case 8:
        return <DataVisualization />;
      case 9:
        return <Research />;
      case 10:
        return <Robotic />;
      case 11:
        return <CLevel />;
      case 12:
        return <DataManagement />;
      case 13:
        return <Consultation />;
      case 14:
        return <TalentSME />;
      case 15:
        return <Monetization />;
      case 16:
        return <Governance />;
      case 17:
        return <BuildOperate />;
    }
  };

  return (
    <>
      <div className="top-services-section">
        <div className="container">
          <div className="services-section">
            <div className="text-center">
              <h2>{intl.formatMessage({ id: "Services" })}</h2>
              <p>{intl.formatMessage({ id: "WeProvide" })}</p>
            </div>

            <div className="d-flex align-items-center justify-content-center pb-4 main-services-section">
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 services-wrapper">
                {servicesTypes.map((serviceType, index) => {
                  return (
                    <div
                      className={
                        activeService === serviceType.id
                          ? `services-card-active`
                          : `services-card`
                      }
                      key={index}
                      onClick={() => {
                        setActiveService(serviceType.id);
                        ScrollFromBottom(400);
                      }}
                    >
                      <ImageBlurHash
                        hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                        height={100}
                        src={serviceType.icon}
                        alt="service icon"
                        classes=""
                      />
                      {/* <img src={serviceType.icon} alt="service icon" /> */}
                      <h3>{intl.formatMessage({ id: serviceType.name })}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-5">{getActiveService()}</div>
      </div>
    </>
  );
};

export default Services;
