import { icons } from '../data/icons.js';

export default function Icon(props) {
  const { icon } = props;

  // if invalid icon, return not found
  if (!icons[icon]) return <div>{icon} not found</div>;

  return (
    <div>
      <a
        href={icons[icon].website}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}{icons[icon].icon}
      </a>
    </div>
  );
}
