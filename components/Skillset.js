import Icon from './Icon.js';

import { skillset } from '../data/skillset.js';

export default function Skillset() {
  return (
    <div>
      <h1>Skillset</h1>
      <div>
        {
          skillset.map((section, i) =>
            <div key={i}>
              <h1>{section.title} {section.icon}</h1>
              <div>
                {
                  section.subsections.map((subsection, j) =>
                    <div key={j}>
                      <h2>{subsection.title}</h2>
                      {
                        subsection.icons.map((icon, k) =>
                          <Icon icon={icon} key={k} />
                        )
                      }
                    </div>
                  )
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
