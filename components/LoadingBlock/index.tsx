import styles from "./styles.module.css";

const LoadingBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        <div className={`${styles.short} ${styles.hand}`}></div>
        <div className={`${styles.long} ${styles.hand}`}></div>
      </div>
      <div className={styles.text}>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingBlock;
