import React from "react";
import Layout from "../../Components/MainLayout/Layout";
import ProjectCarousel from "../../Components/ProjectsCarousel/ProjectCarousel";

import { personalList } from "../../Components/DetailsandImages/PersonalHomeData";

function PersonalProjectsPage() {
  return (
    <Layout>
      <div className="carousel-container">
        <ProjectCarousel items={personalList} pageType="personal" />
      </div>
    </Layout>
  );
}

export default PersonalProjectsPage;
