import { useEffect, useState } from 'react';

// time intervals in milliseconds
const SEC_MS = 1000;
const MIN_MS = SEC_MS * 60;
const HOUR_MS = MIN_MS * 60;
const DAY_MS = HOUR_MS * 24;

export default function Action() {
  const [eventJson, setEventJson] = useState(undefined);

  // gets my last action from github
  async function getLastAction() {
    // request event from github
    const url = 'https://api.github.com/users/csaye/events?per_page=1';
    const response = await fetch(url);
    // set event json if ok
    const json = response.ok ? await response.json() : null;
    if (json?.length) setEventJson(json[0]);
  }

  // returns description of given event type
  function getTypeDescription(type) {
    switch (type) {
      case 'PushEvent': return <>Pushed to GitHub repository<i className="fas fa-arrow-up" /></>;
      case 'PublicEvent': return <>Made GitHub repository public<i className="fas fa-unlock" /></>;
      case 'CreateEvent': return <>Created GitHub repository<i className="fas fa-plus" /></>;
      case 'WatchEvent': return <>Starred GitHub repository<i className="fas fa-star" /></>;
      default: return type;
    }
  }

  // returns time since given date as a string
  function getTimeAgo(createdAt) {
    // get date difference
    const date = new Date(createdAt);
    const now = new Date();
    let diff = now - date;
    // calculate time intervals
    const days = Math.floor(diff / DAY_MS);
    diff %= DAY_MS;
    const hours = Math.floor(diff / HOUR_MS);
    diff %= HOUR_MS;
    const mins = Math.floor(diff / MIN_MS);
    diff %= MIN_MS;
    const secs = Math.floor(diff / SEC_MS);
    // return formatted text
    return (days ? days + 'd' : '') +
      (days || hours ? hours + 'h' : '') +
      (days || hours || mins ? mins + 'm' : '') +
      (secs + 's');
  }

  // get last action on start
  useEffect(() => {
    getLastAction();
  }, []);

  // return empty if no json
  if (!eventJson) return <></>;

  return (
    <div>
      <h2>My last action:</h2>
      <hr />
      {/* event type */}
      <p>{getTypeDescription(eventJson.type)}</p>
      {/* event time ago */}
      <p>
        <i className="far fa-clock" />{' '}
        {getTimeAgo(eventJson.created_at)} ago
      </p>
      {
        // event repository
        eventJson.repo &&
        <p>
          <i className="far fa-bookmark" />{' '}
          <a
            href={`https://github.com/${eventJson.repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {eventJson.repo.name}
          </a>
        </p>
      }
      {
        // event commit
        (eventJson.payload?.commits && eventJson.payload.commits.length > 0) &&
        <p>
          <i className="fas fa-pencil-alt" />{' '}
          <i>{eventJson.payload.commits[eventJson.payload.commits.length - 1].message}</i>
        </p>
      }
    </div>
  );
}
