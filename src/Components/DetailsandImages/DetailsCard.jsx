import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function DetailsCard({ projectImages }) {
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {projectImages.map((image, index) => (
          <Card key={index} style={{ textAlign: "center", border: "none" }}>
            <p>{image.description}</p>
            <Card.Img src={image.image} alt={image.altTag} />
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default DetailsCard;
