import Header from '../components/Header.js';
import About from '../components/About.js';
import Contacts from '../components/Contacts.js';
import Action from '../components/Action.js';
import Skillset from '../components/Skillset.js';
import Projects from '../components/Projects.js';
import Footer from '../components/Footer.js';

import { useRef } from 'react';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  const homeRef = useRef();
  const skillsetRef = useRef();
  const projectsRef = useRef();

  // scrolls given section into view
  function scrollTo(section) {
    if (section === 'home') homeRef.current.scrollIntoView();
    else if (section === 'skillset') skillsetRef.current.scrollIntoView();
    else if (section === 'projects') projectsRef.current.scrollIntoView();
  }

  return (
    <div>
      <span ref={homeRef} />
      <Header scrollTo={scrollTo} />
      <About />
      <Contacts />
      <Action />
      <span ref={skillsetRef} />
      <Skillset />
      <span ref={projectsRef} />
      <Projects />
      <Footer />
    </div>
  );
}
