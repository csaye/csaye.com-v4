import Image from 'next/image';

import styles from '../styles/components/Header.module.css';

export default function Header(props) {
  const { scrollTo } = props;

  return (
    <div className={styles.container}>
      <Image src="/img/logo.png" width="48" height="48" alt="logo" />
      <span className="flexfill" />
      <button onClick={() => scrollTo('home')}>Home</button>
      <button onClick={() => scrollTo('skillset')}>Skillset</button>
      <button onClick={() => scrollTo('projects')}>Projects</button>
    </div>
  );
}
