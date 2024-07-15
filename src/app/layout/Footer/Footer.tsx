import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../shared/functions/ScrollToTop";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LinkType = {
  id: number;
  name: string;
  linkTo: string;
};

const Footer = () => {
  const intl = useIntl();

  const informationLinks: LinkType[] = [
    { id: 0, name: "AboutUs", linkTo: "/about-us" },
    { id: 1, name: "Blogs", linkTo: "/blogs" },
    { id: 2, name: "Faqs", linkTo: "/faqs" },
  ];
  const quicklinks: LinkType[] = [
    { id: 0, name: "AllServices", linkTo: "/services" },
    { id: 1, name: "AllProjects", linkTo: "/projects" },
    { id: 2, name: "Solutions", linkTo: "/solutions" },
  ];
  const socialLinks: any = [
    // {
    //   id: 0,
    //   src: "/media/assets/icons/facebook.svg",
    //   linkTo: "https://www.facebook.com/",
    // },
    {
      id: 1,
      src: "/media/assets/icons/x.svg",
      linkTo: "https://fvmsa.com/en/home/",
    },
    // {
    //   id: 2,
    //   src: "/media/assets/icons/instagram.svg",
    //   linkTo: "https://www.instagram.com/",
    // },
    {
      id: 3,
      src: faLinkedinIn,
      linkTo: "https://fvmsa.com/en/home/",
    },
  ];

  return (
    <div className="footer ">
      <button className="btn-to-top" onClick={scrollToTop}>
        {intl.formatMessage({ id: "BackToTop" })}
      </button>

      <div className="container">
        <div className="footer-info">
          <div>
            <div>
              <img
                src={"/media/assets/future-voice-logo.gif"}
                className="logo"
                alt="logo"
              />
            </div>
            <p>{intl.formatMessage({ id: "ISOCertified" })}</p>
          </div>
          <div>
            <h3>{intl.formatMessage({ id: "Informations" })}</h3>
            <div className="footer-links">
              {informationLinks.map((link) => (
                <Link className="footer-link" key={link.id} to={link.linkTo}>
                  {intl.formatMessage({ id: `${link.name}` })}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3>{intl.formatMessage({ id: "QuickLinks" })}</h3>
            <div className="footer-links">
              {quicklinks.map((link) => (
                <Link className="footer-link" key={link.id} to={link.linkTo}>
                  {intl.formatMessage({ id: `${link.name}` })}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3>{intl.formatMessage({ id: "ExpandYourBoard" })}</h3>
            <Link to={"/contact-us"}>
              <button className="btn-contact-us">
                {intl.formatMessage({ id: "ContactUs" })}
                <img src="/media/assets/icons/send.svg" alt="forward-arrow" />
              </button>
            </Link>
          </div>
        </div>
        <div className="full-width-line" />
        <div className="footer-bottom">
          <div className="footer-social">
            {socialLinks.map((link: any) => (
              <Link
                key={link.id}
                to={link.linkTo}
                target="_blank"
                className="social-link"
              >
                {link.id !== 3 ? (
                  <img src={link.src} />
                ) : (
                  <FontAwesomeIcon
                    className=" text-white fs-5"
                    icon={faLinkedinIn}
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="footer-copyrights">
            {intl.formatMessage({ id: "CopyrightReserved" })}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
