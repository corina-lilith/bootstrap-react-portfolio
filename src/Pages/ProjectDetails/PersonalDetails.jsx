import React from "react";
import Layout from "../components/Layout";
import DetailsCarousel from "../components/DetailsCarousel";

import { personalDetails } from "../../Components/ProjectsCarousel/PersonalDetailsData";

function PersonalDetailsPage({ projectData }) {
  return (
    <Layout>
      <h1>{personalDetails.title}</h1>
      <p>{personalDetails.techStack}</p>
      <DetailsCarousel items={projectData.carouselItems} />
      {/* Other project-specific content */}
    </Layout>
  );
}

export default PersonalDetailsPage;
