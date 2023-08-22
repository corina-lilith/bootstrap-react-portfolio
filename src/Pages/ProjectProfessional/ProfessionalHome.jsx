import React from "react";
import Header from "../../Components/MainLayout/Header";
import Footer from "../../Components/MainLayout/Footer";
import "../../App.css";
import ProjectCarousel from "../../Components/ProjectsCarousel/ProjectCarousel";
import { professionalList } from "../../Components/ProjectsCarousel/ProfessionalHomeData";
import "../../Components/ProjectsCarousel/CarouselStyles.css";

function ProjectsProfessional() {
  return (
    <div className="main-layout">
      <Header />
      <div className="carousel-container">
        <ProjectCarousel items={professionalList} />
      </div>

      <Footer />
    </div>
  );
}

export default ProjectsProfessional;
