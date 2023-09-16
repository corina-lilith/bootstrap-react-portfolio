import React from "react";
import Layout from "../../Components/MainLayout/Layout";
import { personalDetails } from "../../Components/ProjectsCarousel/PersonalDetailsData";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailsCard from "../../Components/ProjectsCarousel/DetailsCard";
import { personalImages } from "../../Components/ProjectsCarousel/PersonalDetailsImages"; // Import the image data

function PersonalDetailsPage() {
  const { projectId } = useParams(); // Get the projectId from the URL

  const projectData = personalDetails.find(
    (project) => project.projectId === projectId
  );

  if (!projectData) {
    return <div>Project not found</div>;
  }

  // Filter the image data based on the projectId
  const projectImages = personalImages.find(
    (project) => project.projectId === projectId
  );

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1>{projectData.title}</h1>
            <p>{projectData.techStack}</p>
            <p>{projectData.brief}</p>
            <p>{projectData.feature1}</p>
            <p>{projectData.feature2}</p>
            <a href={projectData.link}>{projectData.link}</a>
          </Col>
        </Row>
        <Row>
          <DetailsCard projectImages={projectImages.images} />{" "}
          {/* Pass the project-specific images */}
        </Row>
      </Container>
    </Layout>
  );
}

export default PersonalDetailsPage;
