import Project from './Project.js';

import { projects } from '../data/projects.js';

import styles from '../styles/components/Projects.module.css';

const defaultTypes = ['game', 'web', 'other'];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.options}>
        <div className={styles.types}>
          {
            defaultTypes.map((type, i) =>
              <label
                className={types.includes(type) ? null : styles.notype}
                key={i}
              >
                <input
                  type="checkbox"
                  checked={types.includes(type)}
                  onChange={e => updateTypes(type, e.target.checked)}
                />{type}
              </label>
            )
          }
        </div>
      </div>
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
