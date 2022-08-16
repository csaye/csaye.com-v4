import styles from '../styles/components/Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.skew}>
        <p>&copy; Cooper Saye {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
