import PlanetTableCell from "components/PlanetTableCell";
import type { Planet } from "types/planet";

type Props = {
  planet: Planet;
};

const PlanetTableRow = ({ planet }: Props) => {
  return (
    <tr>
      <PlanetTableCell value={planet.name} url={planet.url} />
      <PlanetTableCell value={planet.climate} />
      <PlanetTableCell value={planet.residents} />
      <PlanetTableCell value={planet.terrain} />
      <PlanetTableCell value={planet.population} />
      <PlanetTableCell value={planet.waterSurfaceArea} />
    </tr>
  );
};

export default PlanetTableRow;
