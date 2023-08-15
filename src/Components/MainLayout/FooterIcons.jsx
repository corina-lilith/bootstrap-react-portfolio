import React from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import InstagramIcon from "../../Images/icons/instagram.png";
import FacebookIcon from "../../Images/icons/facebook.png";
import LinkedInIcon from "../../Images/icons/linkedin.png";

const FooterIcons = () => {
  return (
    <Container>
      <a
        href="https://www.instagram.com/corlou33/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={InstagramIcon}
          alt="Home icon to return home"
          className="icon"
        />
      </a>
      <a
        href="https://www.facebook.com/corina.louise.351/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={FacebookIcon}
          alt="Home icon to return home"
          className="icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/corina-pelichowski-794889142/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={LinkedInIcon}
          alt="Home icon to return home"
          className="icon"
        />
      </a>
    </Container>
  );
};

export default FooterIcons;
