import Project from './Project.js';

import { projects } from '../data/projects.js';

import styles from '../styles/components/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projects}>
        {
          projects.map((project, i) =>
            <Project {...project} key={i} />
          )
        }
      </div>
    </div>
  );
}
