import { contacts } from '../data/contacts.js';

import styles from '../styles/components/Contacts.module.css';

export default function Contacts() {
  return (
    <div className={styles.container}>
      {
        contacts.map((contact, i) =>
          <div className={styles.contact} key={i}>
            {
              contact.email &&
              <a href={`mailto:${contact.email}`}>
                {contact.icon}
                <p>{contact.text}</p>
              </a>
            }
            {
              contact.link &&
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.icon}
                <p>{contact.text}</p>
              </a>
            }
          </div>
        )
      }
    </div>
  );
}
