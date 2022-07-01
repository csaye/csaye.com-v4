import Project from './Project.js';

import { projects } from '../data/projects.js';
import { useState } from 'react';

import styles from '../styles/components/Projects.module.css';

const defaultTypes = ['game', 'web', 'other'];

export default function Projects(props) {
  const { projectsRef } = props;

  const [featured, setFeatured] = useState(false);
  const [types, setTypes] = useState(defaultTypes);
  const [sortBy, setSortBy] = useState('date');

  // updates types with given type and action
  function updateTypes(type, include) {
    const newTypes = types.slice();
    if (include) newTypes.push(type);
    else newTypes.splice(newTypes.indexOf(type), 1);
    setTypes(newTypes);
  }

  // returns sorting value for given projects and term
  function sortProjects(a, b) {
    if (sortBy === 'date') return 1;
    else if (sortBy === 'name') return a.name < b.name ? -1 : 1;
    else if (sortBy === 'commits') return a.commits > b.commits ? -1 : 1;
  }

  const filteredProjects = projects
  .filter(project => featured ? project.featured : true)
  .filter(project => types.includes(project.type));

  return (
    <div className={styles.container}>
      <span ref={projectsRef} style={{
        position: 'relative', display: 'block',
        bottom: '100px', left: '50%'
      }} />
      <h1>Projects</h1>
      <div className={styles.options}>
        <label className={styles.featured}>
          <input
            type="checkbox"
            checked={featured}
            onChange={e => setFeatured(e.target.checked)}
          />★
        </label>
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
        <label>
          Sort by{' '}
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="date">Date</option>
            <option value="name">Name</option>
            <option value="commits">Commits</option>
          </select>
        </label>
        <span className={styles.projectcount}>
          ({filteredProjects.length})
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.projects}>
          {
            filteredProjects
            .sort(sortProjects)
            .map((project, i) =>
              <Project {...project} key={i} />
            )
          }
        </div>
      </div>
    </div>
  );
}
