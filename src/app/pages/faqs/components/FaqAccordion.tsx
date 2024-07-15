import { FC } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useIntl } from "react-intl";

interface FaqAccordionI {
  id: string;
  title: string;
  content: string;
}
const FaqAccordion: FC = () => {
  const FaqAccordionContent: FaqAccordionI[] = [
    {
      id: "0",
      title: "WhatDoesYourCompanyDo?",
      content: "At4ExplainWeArePassionateAboutEmpowering",
    },
    {
      id: "1",
      title: "WhatAreYourCompanyValues?",
      content: "OurValuesInactionCollaborationInnovation",
    },
    {
      id: "2",
      title: "WhatKindOfPlatformIs4eBusinessCore?",
      content: "4EBusinessCoreIsAUnifiedPlatformThat",
    },
    {
      id: "3",
      title: "CanICustomizeMyWorkspace?",
      content: "AbsolutelyYouCanPersonalizeYourDashboard",
    },
    {
      id: "4",
      title: "CanIUse4eBusinessCoreonMyPhoneOrTablet?",
      content: "Yes4EBusinessCoreIsFullyResponsive",
    },
    {
      id: "5",
      title: "Can4eBusinessCoreConnectToMyExistingSystems?",
      content: "4EBusinessCoreIntegratesSeamlessly",
    },
  ];
  const intl = useIntl();

  return (
    <div>
      <div className="col-lg-6 accordion__holder">
        <img
          src="/media/assets/icons/union-red.svg"
          alt="star"
          className="union-red"
        />
        <img
          src="/media/assets/icons/union-gradient-blue.svg"
          alt="star"
          className="union-gradient-blue"
        />
        <img
          src="/media/assets/icons/union-group-2.svg"
          alt="star"
          className="union-group-2"
        />
        {FaqAccordionContent.map((faq) => (
          <Accordion key={faq.id}>
            <Accordion.Item eventKey={faq.id} className="accordion__Item">
              <Accordion.Header className="accordion__body">
                {intl.formatMessage({ id: faq.title })}
              </Accordion.Header>
              <Accordion.Body className="accordion__body">
                {intl.formatMessage({ id: faq.content })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
