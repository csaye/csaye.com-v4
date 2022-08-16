import Tooltip from '@material-ui/core/Tooltip';

import { icons } from '../util/icons';

import styles from '../styles/components/IconSmall.module.scss';

export default function IconSmall(props) {
  const { icon } = props;

  // if invalid icon, return not found
  if (!icons[icon]) return <div>{icon} not found</div>;

  return (
    <div className={styles.container}>
      <Tooltip title={icon} arrow>
        <a
          href={icons[icon].website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icons[icon].icon}
        </a>
      </Tooltip>
    </div>
  );
}
