import Header from "../Components/MainLayout/Header";
import Footer from "../Components/MainLayout/Footer";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Education() {
  return (
    <div className="main-layout">
      <Header />
      <Container style={{ textAlign: "center" }}>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Education;
