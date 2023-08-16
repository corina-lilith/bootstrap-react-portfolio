import Header from "../Components/MainLayout/Header";
import Footer from "../Components/MainLayout/Footer";
import "../App.css";
import ProjectMain from "../Components/ProjectsCards/ProjectMain";

function ProjectsHome() {
  return (
    <div className="main-layout">
      <Header />
      <ProjectMain />
      <Footer />
    </div>
  );
}

export default ProjectsHome;
