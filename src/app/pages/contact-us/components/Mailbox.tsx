import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Mailbox = () => {
  const intl = useIntl();

  interface AddressesDataI {
    icon: any;
    text: string;
    link: string;
    className?: string;
  }

  const addressesData: AddressesDataI[] = [
    {
      icon: faGlobe,
      text: "www.FutureVoice.com",
      link: "www.FutureVoice.com",
      className: "faGlobeIcon",
    },
    {
      icon: "sms.svg",
      text: "info@FutureVoice.com",
      link: "mailto:info@FutureVoice.com",
    },
    {
      icon: "location.svg",
      text: "RiyadhConveniently",
      link: "https://maps.app.goo.gl/bMUHXQKS3XtvUKiu8",
    },
  ];

  interface SocialLinksI {
    icon: any;
    link: string;
  }

  const SocialLinks: SocialLinksI[] = [
    // {
    //   icon: "facebook.svg",
    //   link: "https://www.facebook.com/people/4explain/100075775936136/",
    // },
    { icon: "x.svg", link: "https://fvmsa.com/en/home/" },
    {
      icon: faLinkedinIn,
      link: "https://fvmsa.com/en/home/",
    },
    // { icon: "instagram.svg", link: "https://www.instagram.com/4explain/" },
  ];

  return (
    <>
      <img src="/media/assets/contactUs/mailbox.png" alt="mailbox" />
      <h2>{intl.formatMessage({ id: "LetsTalkAbout" })}</h2>
      {addressesData.map((address, index) => (
        <div key={index} className="address">
          {address.text !== "www.FutureVoice.com" ? (
            <img
              src={`/media/assets/contactUs/${address.icon}`}
              alt={address.icon}
            />
          ) : (
            <FontAwesomeIcon className=" text-white fs-5" icon={faGlobe} />
          )}
          <Link to={address.link}>
            {intl.formatMessage({ id: address.text })}
          </Link>
        </div>
      ))}
      <div className="d-flex justify-content-center align-items-center social__links">
        <hr />
        <span>
          <h2 className="mailBox__links">
            {intl.formatMessage({ id: "OurSocialLinks" })}
          </h2>
        </span>
        <hr />
      </div>
      <div className="d-flex justify-content-center align-items-center social__icons__holder">
        {SocialLinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex justify-content-center align-items-center"
          >
            {typeof link.icon === "string" ? (
              <img src={`/media/assets/icons/${link.icon}`} alt={link.icon} />
            ) : (
              <FontAwesomeIcon className="text-white" icon={link.icon} />
            )}
          </a>
        ))}
      </div>
    </>
  );
};

export default Mailbox;
