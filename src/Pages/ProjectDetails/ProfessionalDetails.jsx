import React from "react";
import Layout from "../../Components/MainLayout/Layout";
import { professionalDetails } from "../../Components/DetailsandImages/ProfessionalDetailsData";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProDetailsCard from "../../Components/DetailsandImages/ProfessionalDetailsCard";
import { professionalImages } from "../../Components/DetailsandImages/ProfessionalDetailsImages"; // Import the image data

function ProfessionalDetailsPage() {
  const { projectId } = useParams(); // Get the projectId from the URL

  const projectData = professionalDetails.find(
    (project) => project.projectId === projectId
  );

  if (!projectData) {
    return <div>Project not found</div>;
  }

  // Filter the image data based on the projectId
  const projectImages = professionalImages.find(
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
        <Row style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <ProDetailsCard projectImages={projectImages.images} />{" "}
          {/* Pass the project-specific images */}
        </Row>
      </Container>
    </Layout>
  );
}

export default ProfessionalDetailsPage;
