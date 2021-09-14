import Icon from './Icon.js';

import { skillset } from '../data/skillset.js';

import styles from '../styles/components/Skillset.module.css';

export default function Skillset() {
  return (
    <div className={styles.container}>
      <h1>Skillset</h1>
      <div className={styles.sections}>
        {
          skillset.map((section, i) =>
            <div className={styles.section} key={i}>
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
