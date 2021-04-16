import PlanetTableRow from "components/PlanetTableRow";
import type { Planet } from "types/planet";

import styles from "./styles.module.css";

type Props = {
  planets: Planet[];
};

const PlanetTable = ({ planets }: Props) => {
  const sorted = planets.sort((a, b) => ((a.name || "") > (b.name || "") ? 1 : -1));
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th />
          <th>Climate</th>
          <th>Notable Residents</th>
          <th>Terrains</th>
          <th>Population</th>
          <th>
            Surface Area <br /> Covered by Water <br /> <span className={styles.unit}>(km²)</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((planet, idx) => {
          return <PlanetTableRow key={idx} planet={planet} />;
        })}
      </tbody>
    </table>
  );
};

export default PlanetTable;
