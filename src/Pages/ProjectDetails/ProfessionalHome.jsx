import React from "react";
import Layout from "../../Components/MainLayout/Layout";
import ProjectCarousel from "../../Components/ProjectsCarousel/ProjectCarousel";
import { professionalList } from "../../Components/ProjectsCarousel/ProfessionalHomeData";
import "../../Components/ProjectsCarousel/CarouselStyles.css";

function ProjectsProfessional() {
  return (
    <Layout>
      <div className="carousel-container">
        <ProjectCarousel items={professionalList} pageType="professional" />
      </div>
    </Layout>
  );
}

export default ProjectsProfessional;
