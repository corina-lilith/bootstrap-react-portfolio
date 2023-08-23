import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ProjectCarousel({ items }) {
  return (
    <Carousel>
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          <a style={{ color: "#284323", textDecoration: 'none' }} href={item.link} target="_self" rel="noopener noreferrer">
            <div>
              <h3>{item.business}</h3>
              <img src={item.image} alt={item.altTag} />
              <h4>{item.techStack}</h4>
            </div>
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectCarousel;
