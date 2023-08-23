import React from "react";
import Layout from "../../Components/MainLayout/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { educationList } from "./EducationInfo";

function EducationPage() {
  return (
    <Layout>
      <Container style={{ textAlign: "center" }}>
        <Row style={{ marginTop: "2rem" }}>
          <Col>
            {/* Now you can use the educationList data */}
            {educationList.map((item) => (
              <div key={item.id} style={{ marginBottom: "1rem" }}>
                <h3>{item.year}</h3>
                <p>{item.course1}</p>
                <p>{item.course2}</p>
                <p>{item.course3}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default EducationPage;
