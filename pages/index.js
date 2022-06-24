import Header from '../components/Header.js';
import About from '../components/About.js';
import Contacts from '../components/Contacts.js';
import Skillset from '../components/Skillset.js';
import Projects from '../components/Projects.js';
import Footer from '../components/Footer.js';
import Featured from '../components/Featured.js';

import { useRef } from 'react';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  const skillsetRef = useRef();
  const projectsRef = useRef();

  // scrolls given section into view
  function scrollTo(section) {
    if (section === 'home') window.scrollTo(0, 0);
    else if (section === 'skillset') skillsetRef.current.scrollIntoView();
    else if (section === 'projects') projectsRef.current.scrollIntoView();
  }

  return (
    <div>
      <Header scrollTo={scrollTo} />
      <About />
      <Contacts />
      <Featured />
      <Skillset skillsetRef={skillsetRef} />
      <Projects projectsRef={projectsRef} />
      <Footer />
    </div>
  );
}
