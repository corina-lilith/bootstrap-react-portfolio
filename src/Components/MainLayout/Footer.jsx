import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto">
      <Container>
        <FooterIcons />
        <p style={{ fontSize: "12px" }}>
          &copy; {currentYear} Corina Pelichowski. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
