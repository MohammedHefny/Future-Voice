import { FC } from "react";
import FaqAccordion from "./components/FaqAccordion";
import FaqForm from "./components/FaqForm";
import { useIntl } from "react-intl";

const Faqs: FC = () => {
  const intl = useIntl();

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h3>{intl.formatMessage({ id: "FAQHeader" })}</h3>
        <p>{intl.formatMessage({ id: "FAQDesc" })}</p>
      </div>
      <FaqAccordion />
      <FaqForm />
    </div>
  );
};

export default Faqs;
