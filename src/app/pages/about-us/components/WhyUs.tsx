import { useIntl } from "react-intl";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

const WhyUs = () => {
  const intl = useIntl();
  return (
    <div className="why-us-section">
      {/* <img
        src="/media/assets/icons/union-group-2.svg"
        alt="star-icon"
        className="union-icon union-group-whyus"
      /> */}
      <ImageBlurHash
        hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
        height={200}
        src="/media/assets/icons/union-group-2.svg"
        alt="star-icon"
        classes=""
      />
      <p className="linear-gradient-text">
        {" "}
        {intl.formatMessage({
          id: "WhyUs",
        })}
      </p>
      <h2>
        {" "}
        {intl.formatMessage({
          id: "CreativityCredibilityHardWork",
        })}
      </h2>
      <div className="why-us-content">
        <div className="edge-item-start why-us-card card-bg-2">
          {/* <img src="/media/assets/icons/presentation.png" alt="icon" /> */}
          <ImageBlurHash
            hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
            height={200}
            src="/media/assets/icons/presentation.png"
            alt="icon"
            classes=""
          />
          <p>
            {intl.formatMessage({
              id: "BeReadyForOpportunitiesByOrganizedData",
            })}
          </p>
        </div>
        <div className="why-us-card card-bg-2">
          {/* <img src="/media/assets/icons/binoculars.png" alt="icon" /> */}
          <ImageBlurHash
            hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
            height={200}
            src="/media/assets/icons/binoculars.png"
            alt="icon"
            classes=""
          />
          <p>
            {intl.formatMessage({
              id: "TraceYourBusinessDeeply",
            })}
          </p>
        </div>
        <div className="center-item why-us-card card-bg-3">
          {/* <img src="/media/assets/icons/success.png" alt="icon" /> */}
          <ImageBlurHash
            hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
            height={200}
            src="/media/assets/icons/success.png"
            alt="icon"
            classes=""
          />
          <p>
            {intl.formatMessage({
              id: "RightKnowledgeLeadsToRightDecisions",
            })}
          </p>
        </div>
        <div className="why-us-card card-bg-1">
          {/* <img src="/media/assets/icons/strategy.png" alt="icon" /> */}
          <ImageBlurHash
            hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
            height={200}
            src="/media/assets/icons/strategy.png"
            alt="icon"
            classes=""
          />
          <p className="whiteSpace__preWrap">
            {intl.formatMessage({
              id: "PlanForFutureWithFullInsight",
            })}
          </p>
        </div>
        <div className="edge-item-end why-us-card card-bg-1">
          {/* <img src="/media/assets/icons/pie-chart.png" alt="icon" /> */}
          <ImageBlurHash
            hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
            height={200}
            src="/media/assets/icons/pie-chart.png"
            alt="icon"
            classes=""
          />
          <p>
            {intl.formatMessage({
              id: "AddValueToYourBusinessByAnalyzingYourData",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
