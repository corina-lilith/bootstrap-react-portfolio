import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Image } from "react-bootstrap";
import HomeIcon from "../../Images/icons/HomeIcon.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#284323" }}>
      <Container className="header-links">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>
              <Image
                src={HomeIcon}
                alt="Home icon to return home"
                fluid
                className="icon"
              />
            </Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/projects/home">Projects</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
