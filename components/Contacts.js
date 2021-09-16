import { contacts } from '../data/contacts.js';

import styles from '../styles/components/Contacts.module.css';

export default function Contacts() {
  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <div className={styles.contacts}>
        {
          contacts.map((contact, i) =>
            <div key={i}>
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
    </div>
  );
}
