import React from "react";
import Layout from "../../Components/MainLayout/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { workList } from "./WorkInfo";

import "./Work.css";

function Work() {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "2rem" }}>
          <Col>
            {workList.map((item, index) => (
              <div key={item.id} className="work-item">
                <h3>{item.place}</h3>
                <p className="work-year">{item.year}</p>
                <p className="work-title">{item.title}</p>
                <p className="work-description">{item.description}</p>
                {index !== workList.length - 1 && ( // Check if it's not the last item
                  <img
                    src={item.image}
                    alt="Divider"
                    style={{ margin: "1rem" }}
                  />
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Work;
