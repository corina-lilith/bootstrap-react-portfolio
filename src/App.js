import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/About/AboutMe';
import Education from './Pages/Education/Education';
import ProjectsHome from './Pages/ProjectsHome';
import Work from './Pages/Work/Work';
import ProjectsProfessional from './Pages/ProjectProfessional/ProfessionalHome';
import ProjectsPersonal from './Pages/ProjectPersonal/PersonalHome';
import MoveMentor from './Pages/ProjectPersonal/MoveMentor';
import Tarot from './Pages/ProjectPersonal/TarotReader';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* index is going to be the default page that's rendered */}
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects/home" element={<ProjectsHome />} />
          <Route path="/projects/professional" element={<ProjectsProfessional />} />
          <Route path="/projects/personal" element={<ProjectsPersonal />} />
          <Route path="/projects/personal/tarot" element={<Tarot />} />
          <Route path="/projects/personal/movementor" element={<MoveMentor />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;