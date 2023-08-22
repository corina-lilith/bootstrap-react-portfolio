import Header from "../Components/MainLayout/Header";
import Footer from "../Components/MainLayout/Footer";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../Images/AboutMe/profile_home.png";

function HomePage() {
  return (
    <div className="main-layout">
      <Header />
      <Container
        style={{
          textAlign: "center",
          marginTop: "5.5rem",
        }}
      >
        <Row>
          <Col></Col>
          <Col>
            <img
              src={Profile}
              className="card-img-top"
              alt="avatar of me"
              style={{ maxHeight: "600px", maxWidth: "100%", margin: "0 auto" }}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row style={{ marginTop: "1rem" }}>
          <h3>Corina Pelichowski</h3>
        </Row>
        <Row>
          <p>Combining form and function in creative ways</p>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
