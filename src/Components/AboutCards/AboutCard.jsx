import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./AboutCard.css";

import { aboutList } from "./AboutInfo";

function AboutCard() {
  const [flips, setFlips] = useState(aboutList.map(() => false));

  const handleImageClick = (index) => {
    const newFlips = [...flips];
    newFlips[index] = !newFlips[index];
    setFlips(newFlips);
  };

  return (
    <div className="card-container">
      {aboutList.map((item, index) => (
        <ReactCardFlip
          key={item.id}
          isFlipped={flips[index]}
          flipDirection="vertical"
        >
          <div className="about-card" onClick={() => handleImageClick(index)}>
            <div>
              <div className="about-item">
                <img
                  src={item.image}
                  alt={item.altTag}
                  style={{ margin: "1rem" }}
                />
              </div>
            </div>
          </div>

          <div className="about-card" onClick={() => handleImageClick(index)}>
            <div className="about-item">
              <img
                src={item.infoImage}
                alt={item.altTag}
                style={{ margin: "1rem" }}
              />
            </div>
          </div>
        </ReactCardFlip>
      ))}
    </div>
  );
}

export default AboutCard;
