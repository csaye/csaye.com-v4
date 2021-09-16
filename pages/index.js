import About from '../components/About.js';
import Contacts from '../components/Contacts.js';
import Action from '../components/Action.js';
import Skillset from '../components/Skillset.js';
import Projects from '../components/Projects.js';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  return (
    <div>
      <h1>Cooper Saye<i className="fas fa-user"></i></h1>
      <h2>web and game developer</h2>
      <About />
      <Contacts />
      <Action />
      <Skillset />
      <Projects />
    </div>
  );
}
