import { useIntl } from "react-intl";
import Mailbox from "./Mailbox";
import Map from "./Map";
import HeaderText from "../../../shared/headerText";
const Addresses = () => {
  const headerTextData = {
    header1: "ContactUs",
    header2: "OurTeamIsReady",
    className: "contact__stars",
  };
  return (
    <>
      <div className="addresses">
        <HeaderText HeaderText={headerTextData} />
        <div className="container addresses__holder">
          <div className="row align-items-start">
            <div className="col-md-6 mailbox">
              <Mailbox />
            </div>
            <div className="col-md-6">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addresses;
