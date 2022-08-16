import About from '../components/About';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skillset from '../components/Skillset';

import { useRef } from 'react';

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
      <Skillset skillsetRef={skillsetRef} />
      <Projects projectsRef={projectsRef} />
      <Footer />
    </div>
  );
}
