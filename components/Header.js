import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.container}>
      <Image src="/img/logo.png" width="48" height="48" alt="logo" />
      <span className="flexfill" />
      <button>Home</button>
      <button>Skillset</button>
      <button>Projects</button>
    </div>
  );
}
