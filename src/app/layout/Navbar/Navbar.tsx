import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SwitchLang from "./components/SwitchLang";
import { useIntl } from "react-intl";
import { Link, useLocation, useNavigation, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { scrollToTop } from "../../shared/functions/ScrollToTop";

function MainNavBar() {
  const intl = useIntl();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to track navbar state (expanded/collapsed)
  const [systemIsOpen, setSystemIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isHome, setIsHome] = useState(true);

  const page = useParams();

  useEffect(() => {
    if (page["*"] !== "home") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [page]);

  const isActive = (path: string) => location.pathname === path;

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setSystemIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor:
          isOpen || isScrolled || !isHome ? "#fff" : "transparent",
        boxShadow:
          isOpen || isScrolled || !isHome ? "0 2px 14px #dfdfdf" : "none",
        color: isOpen || isScrolled || !isHome ? "black" : "white",
      }}
      className="fixed-top "
    >
      <Container>
        <Navbar.Brand>
          <Nav className="m-auto gap-2">
            {/* <Link to="/home" className="text-decoration-none">
              <img
                src={
                  isOpen || isScrolled || !isHome || isHovered
                    ? "/media/theme-img/logo.png"
                    : "/media/theme-img/logo-wh.png"
                }
                className="logo"
                alt="logo"
              />
            </Link> */}
            <Link to="/home" className="text-decoration-none">
              <img
                src="/media/assets/future-voice-logo.gif"
                className="logo"
                alt="logo"
              />
            </Link>
          </Nav>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={toggleNavbar}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto gap-4">
            <Nav.Link
              as={Link}
              to="/home"
              active={isActive("/home")}
              className={
                isOpen || isScrolled || !isHome
                  ? "nav-white"
                  : "nav-transparent"
              }
              onClick={scrollToTop}
            >
              {intl.formatMessage({ id: "Home" })}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about-us"
              active={isActive("/about-us")}
              className={
                isOpen || isScrolled || !isHome
                  ? "nav-white"
                  : "nav-transparent"
              }
            >
              {intl.formatMessage({ id: "AboutUs" })}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              active={isActive("/services")}
              className={
                isOpen || isScrolled || !isHome
                  ? "nav-white"
                  : "nav-transparent"
              }
            >
              {intl.formatMessage({ id: "Services" })}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/solutions"
              active={isActive("/solutions")}
              className={
                isOpen || isScrolled || !isHome
                  ? "nav-white"
                  : "nav-transparent"
              }
            >
              {intl.formatMessage({ id: "Solutions" })}
            </Nav.Link>
            <NavDropdown
              title={intl.formatMessage({ id: "SuccessStories" })}
              className={`${
                isOpen || isScrolled || !isHome
                  ? "nav-white"
                  : "nav-transparent"
              }`}
            >
              <Link className=" dropdown-item-container " to="/milestone">
                <NavDropdown.Item href="/milestone" className=" fs-6">
                  <img
                    className=""
                    src="/media/assets/icons/milestone.svg"
                    alt=""
                  />
                  <span> {intl.formatMessage({ id: "Milestone" })}</span>
                </NavDropdown.Item>
              </Link>
              <Link className=" dropdown-item-container " to="/projects">
                <NavDropdown.Item href="/projects" className=" fs-6">
                  <img
                    className=""
                    src="/media/assets/icons/projects.svg"
                    alt=""
                  />
                  <span> {intl.formatMessage({ id: "Projects" })}</span>
                </NavDropdown.Item>
              </Link>
              <Link
                className=" dropdown-item-container "
                to="/client-and-partner"
              >
                <NavDropdown.Item href="/client-and-partner" className=" fs-6">
                  <img
                    className=""
                    src="/media/assets/icons/clients.svg"
                    alt=""
                  />
                  <span> {intl.formatMessage({ id: "ClientPartner" })}</span>
                </NavDropdown.Item>
              </Link>
              <Link className=" dropdown-item-container " to="/certificates">
                <NavDropdown.Item href="/certificates" className=" fs-6">
                  <img
                    className=""
                    src="/media/assets/icons/certificates.svg"
                    alt=""
                  />
                  <span> {intl.formatMessage({ id: "Certificates" })}</span>
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <div
            className={`lang-contact ${
              isOpen || isScrolled || !isHome ? "nav-white" : "nav-transparent"
            }`}
          >
            <SwitchLang
              isScrolled={isOpen || isScrolled || !isHome || isHovered}
            />
            <Link to="/contact-us" className="contact-us-btn">
              {intl.formatMessage({ id: "ContactUs" })}
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;
