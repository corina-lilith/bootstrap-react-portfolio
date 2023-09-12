import React from "react";
import Layout from "../../Components/MainLayout/Layout";
import { personalDetails } from "../../Components/ProjectsCarousel/PersonalDetailsData";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailsCard from "../../Components/ProjectsCarousel/DetailsCard";

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
          <DetailsCard />
        </Row>
      </Container>
    </Layout>
  );
}

export default PersonalDetailsPage;
