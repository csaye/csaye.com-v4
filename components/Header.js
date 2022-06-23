import Image from 'next/image';

import styles from '../styles/components/Header.module.css';

export default function Header(props) {
  const { scrollTo } = props;

  return (
    <div className={styles.container}>
      <Image
        onClick={() => scrollTo('home')}
        src="/img/logo.png"
        width="64"
        height="64"
        quality="100"
        alt="logo.png"
        priority
      />
      <span className="flexfill" />
      <button onClick={() => scrollTo('home')}>Home</button>
      <button onClick={() => scrollTo('skillset')}>Skillset</button>
      <button onClick={() => scrollTo('projects')}>Projects</button>
    </div>
  );
}
