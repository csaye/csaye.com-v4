import Image from 'next/image';
import Icon from './Icon.js';

import styles from '../styles/components/Project.module.css';

export default function Project(props) {
  const { name, description, link, image, buttons, icons } = props;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={`/img/projects/${image}`}
          layout="fill"
          objectFit="cover"
          alt={image}
        />
      </div>
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
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
      <div>
        {
          icons.map((icon, i) =>
            <Icon key={i} icon={icon} />
          )
        }
      </div>
    </div>
  );
}
