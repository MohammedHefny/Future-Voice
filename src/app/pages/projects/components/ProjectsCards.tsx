import React, { useState } from "react";
import { useIntl } from "react-intl";
import { Pagination } from "react-bootstrap";
import { scrollToTop } from "../../../shared/functions/ScrollToTop";
import ImageBlurHash from "../../../shared/components/imageBlurHash";

const ProjectsCards = () => {
  const projects = [
    {
      id: 0,
      project: "Project1",
      projectDate: "11/14/2005",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 1,
      project: "Project2",
      projectDate: "6/30/2012",
      client: "RiyadhRegionMunicipality",
      clientLogo: "/media/assets/clients/RiyadhRegionMunicipality.png",
    },
    {
      id: 2,
      project: "Project3",
      projectDate: "10/22/2011",
      client: "MunicipalRuralAffairs",
      clientLogo: "/media/assets/clients/MOMRAH.png",
    },

    {
      id: 3,
      project: "Project39",
      projectDate: "2015",
      client: "Tahakom",
      clientLogo: "/media/assets/clients/Tahakom.png",
    },

    {
      id: 4,
      project: "Project15",
      projectDate: "9/7/2022",
      client: "Aldarah",
      clientLogo: "/media/assets/clients/Aldarah.svg",
    },
    {
      id: 5,
      project: "Project6",
      projectDate: "10/24/2021",
      client: "TransportGeneralAuthority",
      clientLogo: "/media/assets/clients/TGA.png",
    },
    {
      id: 6,
      project: "Project7",
      projectDate: "7/14/2023",
      client: "NCVC",
      clientLogo: "/media/assets/clients/NCNV2.png",
    },

    {
      id: 7,
      project: "Project31",
      projectDate: "10/17/2022",
      client: "Davita",
      clientLogo: "/media/assets/clients/Davita.png",
    },
    {
      id: 8,
      project: "Project9",
      projectDate: "2/1/2006",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 9,
      project: "Project10",
      projectDate: "5/7/2008",
      client: "RiyadhRegionMunicipality",
      clientLogo: "/media/assets/clients/RiyadhRegionMunicipality.png",
    },
    {
      id: 10,
      project: "Project11",
      projectDate: "5/14/2022",
      client: "TransportGeneralAuthority",
      clientLogo: "/media/assets/clients/TGA.png",
    },
    {
      id: 11,
      project: "Project12",
      projectDate: "6/18/2007",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 12,
      project: "Project13",
      projectDate: "7/29/2008",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 13,
      project: "Project14",
      projectDate: "7/28/2011",
      client: "TransportGeneralAuthority",
      clientLogo: "/media/assets/clients/RiyadhRegionMunicipality.png",
    },

    {
      id: 14,
      project: "Project5",
      projectDate: "1/11/2007",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },

    {
      id: 15,
      project: "Project16",
      projectDate: "3/26/2008",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 16,
      project: "Project17",
      projectDate: "3/24/2009",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 17,
      project: "Project18",
      projectDate: "6/30/2009",
      client: "RiyadhRegionMunicipality",
      clientLogo: "/media/assets/clients/RiyadhRegionMunicipality.png",
    },
    {
      id: 18,
      project: "Project19",
      projectDate: "11/17/2022",
      client: "TransportGeneralAuthority",
      clientLogo: "/media/assets/clients/TGA.png",
    },
    {
      id: 19,
      project: "Project20",
      projectDate: "4/14/2010",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 20,
      project: "Project21",
      projectDate: "3/24/2009",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 21,
      project: "Project22",
      projectDate: "11/11/2022",
      client: "TransportGeneralAuthority",
      clientLogo: "/media/assets/clients/TGA.png",
    },
    {
      id: 22,
      project: "Project23",
      projectDate: "5/21/2011",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 23,
      project: "Project24",
      projectDate: "4/14/2010",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 24,
      project: "Project25",
      projectDate: "8/7/2011",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 25,
      project: "Project26",
      projectDate: "5/6/2012",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 26,
      project: "Project27",
      projectDate: "6/24/2014",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 27,
      project: "Project28",
      projectDate: "2015",
      client: "Tahakom",
      clientLogo: "/media/assets/clients/Tahakom.png",
    },
    {
      id: 28,
      project: "Project29",
      projectDate: "7/22/2014",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 29,
      project: "Project30",
      projectDate: "11/12/2014",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 30,
      project: "Project8",
      projectDate: "5/18/2006",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 31,
      project: "Project32",
      projectDate: "3/30/2017",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 32,
      project: "Project33",
      projectDate: "8/3/2016",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 33,
      project: "Project34",
      projectDate: "2007",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 34,
      project: "Project35",
      projectDate: "2016",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 35,
      project: "Project36",
      projectDate: "2017",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 36,
      project: "Project37",
      projectDate: "2010",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 37,
      project: "Project38",
      projectDate: "2015",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
    {
      id: 38,
      project: "Project4",
      projectDate: "4/19/2006",
      client: "SaudiTelecom",
      clientLogo: "/media/assets/clients/stc.png",
    },
  ];

  const intl = useIntl();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container">
      <div className="projects-header">
        <h3>{intl.formatMessage({ id: "Projects" })}</h3>
        <p>{intl.formatMessage({ id: "ProjectsDesc" })}</p>
      </div>
      <div className="projects-cards">
        {currentItems.map((project) => (
          <div key={project.id} className="project-card">
            <h4>{intl.formatMessage({ id: project.project })}</h4>
            <div className="project-date">
              {/* <img src="/media/assets/icons/calendar.svg" alt="calendar" /> */}
              <ImageBlurHash
                hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                height={200}
                src="/media/assets/icons/calendar.svg"
                alt="calendar"
                classes=""
              />
              <span>{project.projectDate}</span>
            </div>
            <div className="project-client">
              {/* <img src={project.clientLogo} alt="client-logo" /> */}
              <ImageBlurHash
                hash="L8H{Zs?ZCR560T~U9E9~t94n#UD*"
                height={200}
                src={project.clientLogo}
                alt="client-logo"
                classes=""
              />
              <p>{intl.formatMessage({ id: project.client })}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-5 d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            linkClassName="custom-pagination-button"
          />
          {Array.from({ length: totalPages }).map((_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => {
                handlePageChange(index + 1);
                scrollToTop();
              }}
              linkClassName={`custom-pagination-button ${
                index + 1 === currentPage
                  ? "active-page background-linear-gradient-color"
                  : ""
              }`}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            linkClassName="custom-pagination-button"
          />
        </Pagination>
      </div>
    </div>
  );
};

export default ProjectsCards;
