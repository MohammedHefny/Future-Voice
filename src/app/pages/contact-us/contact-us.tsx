import StayInformed from "../../shared/components/StayInformed";
import WhereWeAre from "./WhereWeAre";
import Addresses from "./components/Addresses";

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <Addresses />
      <WhereWeAre />
      <StayInformed />
    </div>
  );
};

export default ContactUs;
