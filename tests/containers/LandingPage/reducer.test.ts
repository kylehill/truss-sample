import { initialize, reducer, LoadingStatus } from "containers/LandingPage/reducer";
import type { StarWarsAPIPlanet } from "types/swapi";
import type { Planet } from "types/planet";

describe("containers/LandingPage/reducer", () => {
  it("updates state when an fetch error occurs", () => {
    let state = initialize();
    expect(state.loading).toEqual(LoadingStatus.Loading);
    state = reducer(state, { type: "fetch_failure" });
    expect(state.loading).toEqual(LoadingStatus.Failure);
  });

  it("updates state when an fetch completes", () => {
    const data: StarWarsAPIPlanet[] = [
      {
        name: "Test Planet",
        climate: "warm, cold",
        terrain: "trees, not trees",
        diameter: "10000",
        surface_water: "20",
        population: "1000000",
        residents: [{ name: "Jake Thatguy" }],
        url: "https://truss.works",
      },
      {
        name: "unknown",
        climate: "unknown",
        terrain: "unknown",
        diameter: "unknown",
        surface_water: "unknown",
        population: "unknown",
        residents: [],
        url: "unknown",
      },
    ];

    const planets: Planet[] = [
      {
        name: "Test Planet",
        climate: ["warm", "cold"],
        terrain: ["trees", "not trees"],
        population: 1000000,
        residents: 1,
        url: "https://truss.works",
        waterSurfaceArea: 12566.370614359173,
      },
      {
        name: null,
        climate: null,
        terrain: null,
        population: null,
        residents: 0,
        url: null,
        waterSurfaceArea: null,
      },
    ];

    let state = initialize();
    state = reducer(state, { type: "fetch_success", data });
    expect(state.loading).toEqual(LoadingStatus.Success);
    expect(state.planets).toEqual(planets);
  });
});
