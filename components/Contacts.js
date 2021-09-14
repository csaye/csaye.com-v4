import { contacts } from '../data/contacts.js';

export default function Contact() {
  return (
    <div>
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
  );
}
