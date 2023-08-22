import React from "react";
import Header from "../../Components/MainLayout/Header";
import Footer from "../../Components/MainLayout/Footer";
import ProjectCarousel from "../../Components/ProjectsCarousel/ProjectCarousel";

import { personalList } from "../../Components/ProjectsCarousel/PersonalHomeData";

function PersonalProjectsPage() {
  return (
    <div className="main-layout">
      <Header />
      <div className="carousel-container">
        <ProjectCarousel items={personalList} />
      </div>

      <Footer />
    </div>
  );
}

export default PersonalProjectsPage;
