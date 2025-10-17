import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Career from './components/Career';
import SideProjects from './components/SideProjects';
import { personalInfo, skills, certifications, projects, sideProjects } from './data/portfolioData';

function App() {
  return (
    <div className="portfolio">
      <Navigation />
      <Hero data={personalInfo} />
      <Skills data={skills} />
      <Certifications data={certifications} />
      <Career data={projects} />
      <SideProjects data={sideProjects} />
    </div>
  );
}

export default App;
