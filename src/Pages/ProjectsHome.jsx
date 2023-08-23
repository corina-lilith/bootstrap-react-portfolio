import React from "react";
import Layout from "../Components/MainLayout/Layout";
import ProjectMain from "../Components/ProjectsCards/ProjectMain";

function ProjectsHome() {
  return (
    <div className="main-layout">
      <Layout>
        <ProjectMain />
      </Layout>
    </div>
  );
}

export default ProjectsHome;
