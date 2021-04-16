import PlanetTable from "components/PlanetTable";
import { render, screen } from "@testing-library/react";
import type { Planet } from "types/planet";

const nullPlanet: Planet = {
  name: null,
  climate: null,
  terrain: null,
  population: null,
  residents: null,
  waterSurfaceArea: null,
  url: null,
};

describe("components/PlanetTable", () => {
  it("displays planets in alphabetical order", () => {
    render(
      <PlanetTable
        planets={[
          { ...nullPlanet, name: "Beta" },
          { ...nullPlanet },
          { ...nullPlanet, name: "Alpha" },
        ]}
      />
    );

    // includes header row, so lets .slice it off
    const rows = screen.getAllByRole("row").slice(1);
    expect(rows.length).toEqual(3);
    expect(rows.map((row) => row.querySelector("td:first-child")?.textContent)).toEqual([
      "?",
      "Alpha",
      "Beta",
    ]);
  });
});
