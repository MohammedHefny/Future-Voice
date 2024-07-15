import React from "react";
import BlurColoredBg from "../../shared/components/BlurColoredBg";
import ProjectsCards from "./components/ProjectsCards";
import StayInformed from "../../shared/components/StayInformed";

const Projects = () => {
  return (
    <div className="projects-page position-relative overflow-hidden">
      <BlurColoredBg />
      <ProjectsCards />
      <StayInformed />
    </div>
  );
};

export default Projects;
