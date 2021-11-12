import Project from './Project';

import { projects } from '../data/projects';

export default function Featured() {
  return (
    <div>
      <div>
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
