import styles from "./styles.module.css";

type Props = {
  value: string[] | string | number | null;
  url?: string | null;
};

const PlanetTableCell = ({ value, url }: Props) => {
  if (Array.isArray(value)) {
    return (
      <td className={styles.cell}>
        <ul>
          {value.map((str, key) => {
            const formatted = str
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.substr(1))
              .join(" ");
            return <li key={key}>{formatted}</li>;
          })}
        </ul>
      </td>
    );
  }

  switch (typeof value) {
    case "string": {
      if (url) {
        return (
          <td className={styles.cell}>
            <a target="_blank" href={url}>
              {value}
            </a>
          </td>
        );
      }
      return <td className={styles.cell}>{value}</td>;
    }

    case "number": {
      const textValue = value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return <td className={`${styles.cell} ${styles.number}`}>{textValue}</td>;
    }

    default: {
      if (url) {
        return (
          <td className={styles.cell}>
            <a target="_blank" href={url}>
              [unknown]
            </a>
          </td>
        );
      }
      return <td className={`${styles.cell} ${styles.blank}`}>?</td>;
    }
  }
};

export default PlanetTableCell;
