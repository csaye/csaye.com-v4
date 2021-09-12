import Image from 'next/image';
import Icon from './Icon.js';

export default function Project(props) {
  const { name, description, link, image, buttons, icons } = props;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`img/projects/${image}`}
          width="256"
          height="128"
          alt={image}
        />
      </a>
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
