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
              {
                section.icons.map((icon, j) =>
                  <Icon icon={icon} key={j} />
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
}
