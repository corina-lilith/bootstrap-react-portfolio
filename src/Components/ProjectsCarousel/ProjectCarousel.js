import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ProjectCarousel({ items }) {
  return (
    <Carousel>
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          <div>
            <h3>{item.business}</h3>
            <img src={item.image} alt={item.altTag} />
            <h4>{item.techStack}</h4>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectCarousel;
