import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { personalImages } from "./PersonalDetailsImages";

function DetailsCard() {
  return (
    <Row xs={1} md={1} className="g-4">
      <Col>
        <Card>
          <Card.Body>
            {personalImages.map((project, index) => (
              <div key={project.projectId}>
                {Array.isArray(project.images) &&
                  project.images.map((image, i) => (
                    <Card key={i}>
                      <Card.Img src={image.image} alt={image.altTag} />
                    </Card>
                  ))}
              </div>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default DetailsCard;
