import Project from './Project.js';

import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <div>
      {
        projects.map((project, i) =>
          <Project {...project} key={i} />
        )
      }
    </div>
  );
}
