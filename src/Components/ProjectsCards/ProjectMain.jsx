import Personal from "../../Images/AboutMe/profile_personal.png";
import Professional from "../../Images/AboutMe/profile_professional.png";
import { Link } from "react-router-dom";

const ProjectCardsData = [
  {
    title: "Professional Projects",
    image: Professional,
    route: "/projects/professional",
    altTag: "Me dressed professionally",
  },
  {
    title: "Personal Projects",
    image: Personal,
    route: "/projects/personal",
    altTag: "Me dressed casually",
  },
];

const Card = ({ title, image, route, altTag }) => {
  return (
    <div
      className="card"
      style={{ margin: "15px", border: "none", marginTop: "6rem" }}
    >
      <h4 style={{ textAlign: "center" }}>{title}</h4>
      <Link className="nav-link btn" to={route}>
        <img
          src={image}
          className="card-img-top"
          alt={altTag}
          style={{ maxHeight: "600px", maxWidth: "100%", margin: "0 auto" }}
        />
      </Link>
    </div>
  );
};

function MainProjectCards() {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        {ProjectCardsData.map((cardData, index) => (
          <div key={index} className="col-md-3">
            <Card {...cardData} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainProjectCards;
