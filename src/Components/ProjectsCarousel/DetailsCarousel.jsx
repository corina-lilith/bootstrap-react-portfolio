import React from "react";
import Carousel from "react-bootstrap/Carousel";

function DetailsCarousel({ items }) {
  return (
    <Carousel>
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          {/* Content for carousel items */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DetailsCarousel;
