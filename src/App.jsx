import { useRef } from 'react';
import Header from './components/Header/Header'
import Education from './Education/Education'
import Skills from './components/skills/skill'
import Projects from './components/Projects/Projects'
import Footer from "./components/Footer"

const App = () => {
  //create refs for each section
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior:'smooth' });
  }


  return (
    <>
      <section ref={homeRef}>
      <Header
         onScroll={(section) => {
          if (section === 'home') scrollToSection(homeRef);
          if (section === 'education') scrollToSection(educationRef);
          if (section === 'projects') scrollToSection(projectRef);
          if (section === 'skills') scrollToSection(skillsRef);
        }}
      />

      </section>
      
      <section ref={educationRef}>
      <Education />
      </section>
      <section ref={skillsRef}>
      <Skills />
      </section>
      
      <section ref={projectRef}>
      <Projects />
      </section>
        
      <Footer />
    </>
   
  )
}

export default App