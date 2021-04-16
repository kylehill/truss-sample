import PlanetTable from "./index";

export default {
  title: "Planet Table",
  component: PlanetTable,
};

export const standard = () => (
  <PlanetTable
    planets={[
      {
        name: "Test Planet",
        climate: ["hot", "cold"],
        population: 1e6,
        residents: 1,
        terrain: ["city", "not city"],
        url: "https://truss.works",
        waterSurfaceArea: 13524.24,
      },
    ]}
  />
);
