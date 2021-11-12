import Project from './Project';

import { projects } from '../data/projects';

import styles from '../styles/components/Featured.module.css';

export default function Featured() {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        {
          projects
          .filter(project => project.featured)
          .map((project, i) =>
            <Project {...project} key={i} />
          )
        }
      </div>
    </div>
  );
}
