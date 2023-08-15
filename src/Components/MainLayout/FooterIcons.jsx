import React from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import InstagramIcon from "../../Images/icons/instagram.png";
import FacebookIcon from "../../Images/icons/facebook.png";
import LinkedInIcon from "../../Images/icons/linkedin.png";
import { Link } from "react-router-dom";

const FooterIcons = () => {
  return (
    <Container>
      <Link to={"/"}>
        <Image
          src={InstagramIcon}
          alt="Home icon to return home"
          className="icon"
        />
      </Link>
      <Link to={"/"}>
        <Image
          src={FacebookIcon}
          alt="Home icon to return home"
          className="icon"
        />
      </Link>
      <Link to={"/"}>
        <Image
          src={LinkedInIcon}
          alt="Home icon to return home"
          className="icon"
        />
      </Link>
    </Container>
  );
};

export default FooterIcons;
