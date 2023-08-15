import React from "react"; // Make sure to import React if you haven't already
import Header from "../../Components/MainLayout/Header";
import Footer from "../../Components/MainLayout/Footer";
import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { educationList } from "./EducationInfo";

function EducationPage() {
  return (
    <div className="main-layout">
      <Header />
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
      <Footer />
    </div>
  );
}

export default EducationPage;
