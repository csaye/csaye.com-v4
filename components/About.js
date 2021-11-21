import styles from '../styles/components/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Cooper Saye</h1>
      <h2>web & game developer</h2>
      <h3>
        <a
          href="https://congressionalappchallenge.us"
          target="_blank"
          rel="noopener noreferrer"
        >
          Congressional App Challenge 2021 Winner
        </a>
      </h3>
      <p>Fan of open source and creative coding.</p>
      <p>Working primarily in React, C#, and Python.</p>
    </div>
  );
}
