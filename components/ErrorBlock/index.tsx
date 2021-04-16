import styles from "./styles.module.css";

type Props = {
  header: string;
  subhead: string;
};

const ErrorBlock = ({ header, subhead }: Props) => {
  return (
    <div className={styles.block}>
      <p className={styles.header}>{header}</p>
      <p className={styles.subhead}>{subhead}</p>
    </div>
  );
};

export default ErrorBlock;
