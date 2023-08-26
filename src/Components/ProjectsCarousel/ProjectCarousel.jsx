import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function ProjectCarousel({ items, pageType }) {
  return (
    <Carousel>
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          {/* Conditionally render the link based on the pageType */}
          {pageType === "personal" ? (
            <Link
              to={`/projects/personal/${item.id}`}
              style={{ color: "#284323", textDecoration: "none" }}
            >
              <h3>{item.business}</h3>
              <img src={item.image} alt={item.altTag} />
              <h4>{item.techStack}</h4>
            </Link>
          ) : (
            <Link
              to={`/projects/professional/${item.id}`}
              style={{ color: "#284323", textDecoration: "none" }}
            >
              <h3>{item.business}</h3>
              <img src={item.image} alt={item.altTag} />
              <h4>{item.techStack}</h4>
            </Link>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectCarousel;
