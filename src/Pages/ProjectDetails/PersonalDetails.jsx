import React from "react";
import Layout from "../../Components/MainLayout/Layout";
import { personalDetails } from "../../Components/ProjectsCarousel/PersonalDetailsData";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PersonalDetailsPage() {
  const { projectId } = useParams(); // Get the projectId from the URL

  const projectData = personalDetails.find(
    (project) => project.projectId === projectId
  );

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <Layout>
      <Container style={{ textAlign: "center", wordWrap: "break-word" }}>
        <Row>
          <Col>
            <h1>{projectData.title}</h1>
            <p>{projectData.techStack}</p>
            <p>{projectData.brief}</p>
            <p>{projectData.feature1}</p>
            <p>{projectData.feature2}</p>
            <p>{projectData.link}</p>
          </Col>
        </Row>
      </Container>

      {/* Render your images or other components here */}
    </Layout>
  );
}

export default PersonalDetailsPage;
