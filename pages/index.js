import Contacts from '../components/Contacts.js';
import Action from '../components/Action.js';
import Skillset from '../components/Skillset.js';
import Projects from '../components/Projects.js';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  return (
    <div>
      <h1>Cooper Saye</h1>
      <Contacts />
      <Action />
      <Skillset />
      <Projects />
    </div>
  );
}
