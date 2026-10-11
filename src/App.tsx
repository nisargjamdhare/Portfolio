import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationCertifications } from './components/EducationCertifications';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';

export function App(): React.ReactElement {
  return (
    <div className="App">
      <NavBar />
      <main id="main-content">
        <Banner />
        <Experience />
        <Projects />
        <Skills />
        <EducationCertifications />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;

