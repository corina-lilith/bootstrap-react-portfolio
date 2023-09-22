import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/About/AboutMe';
import Education from './Pages/Education/Education';
import ProjectsHome from './Pages/ProjectsHome';
import Work from './Pages/Work/Work';
import ProjectsProfessional from './Pages/ProjectDetails/ProfessionalHome';
import ProjectsPersonal from './Pages/ProjectDetails/PersonalHome';
import PersonalDetailsPage from './Pages/ProjectDetails/PersonalDetails';
import ProfessionalDetailsPage from './Pages/ProjectDetails/ProfessionalDetails';

const App = () => {

  return (
    <div>
      <Router>
        <Router>
          {/* index is going to be the default page that's rendered */}
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects/home" element={<ProjectsHome />} />
          <Route path="/projects/professional" element={<ProjectsProfessional />} />
          <Route path="/projects/professional/:projectId" element={<ProfessionalDetailsPage />} />
          <Route path="/projects/personal" element={<ProjectsPersonal />} />
          <Route path="/projects/personal/:projectId" element={<PersonalDetailsPage />} />
        </Router>
      </Router>
    </div >
  );
};

export default App;