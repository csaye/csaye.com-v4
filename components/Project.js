import Image from 'next/image';
import IconSmall from './IconSmall.js';

import styles from '../styles/components/Project.module.css';

export default function Project(props) {
  const { name, description, link, image, buttons, icons } = props;

  return (
    <div className={styles.container}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={styles.image}>
            <Image
              src={`/img/projects/${image}`}
              layout="fill"
              objectFit="cover"
              alt={image}
            />
        </div>
      </a>
      <h1>{name}</h1>
      <p>{description}</p>
      <div className={styles.buttons}>
        {
          buttons.map((button, i) =>
            <a
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
            >
              {button.label}
            </a>
          )
        }
      </div>
      <span className={styles.filler} />
      <div className={styles.icons}>
        {
          icons.map((icon, i) =>
            <IconSmall key={i} icon={icon} />
          )
        }
      </div>
    </div>
  );
}
