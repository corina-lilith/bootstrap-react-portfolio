import Header from "../../Components/MainLayout/Header";
import Footer from "../../Components/MainLayout/Footer";
import AboutCard from "../../Components/AboutCards/AboutCard";
import "../../App.css";

function AboutMe() {
  return (
    <div className="main-layout">
      <Header />
      <AboutCard />
      <Footer />
    </div>
  );
}

export default AboutMe;
