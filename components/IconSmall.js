import Tooltip from '@material-ui/core/Tooltip';

import { icons } from '../data/icons.js';

export default function IconSmall(props) {
  const { icon } = props;

  // if invalid icon, return not found
  if (!icons[icon]) return <div>{icon} not found</div>;

  return (
    <div>
      <Tooltip title={icon} arrow>
        {icons[icon].icon}
      </Tooltip>
    </div>
  );
}
