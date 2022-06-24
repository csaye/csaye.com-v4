import Icon from './Icon.js';

import { skillset } from '../data/skillset.js';

import styles from '../styles/components/Skillset.module.css';

export default function Skillset(props) {
  const { skillsetRef } = props;

  return (
    <div className={styles.container}>
      <span ref={skillsetRef} style={{
        position: 'relative', display: 'block',
        bottom: '110px', left: '50%'
      }} />
      <h1>Skillset</h1>
      <div className={styles.sections}>
        {
          skillset.map((section, i) =>
            <div className={styles.section} key={i}>
              <h1>{section.title} {section.icon}</h1>
              <div>
                {
                  section.subsections.map((subsection, j) =>
                    <div className={styles.subsection} key={j}>
                      <div className={styles.subtitle}>
                        {subsection.title}
                      </div>
                      <div className={styles.icons}>
                        {
                          subsection.icons.map((icon, k) =>
                            <Icon icon={icon} key={k} />
                          )
                        }
                      </div>
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
