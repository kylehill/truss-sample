import type { StarWarsAPIResponse } from "types/swapi";
import { fetchStarWarsAPIPlanets } from "util/fetchStarWarsAPIPlanets";
import fetch from "jest-fetch-mock";

describe("fetchStarWarsAPIPlanets", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("fetches data", async () => {
    const firstResponse: StarWarsAPIResponse = {
      count: 2,
      next: "https://example.dev/page/2",
      results: [
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
      ],
    };

    const secondResponse: StarWarsAPIResponse = {
      count: 2,
      next: null,
      results: [
        {
          name: "Different Planet",
          climate: "warm, cold",
          terrain: "cityscape",
          diameter: "10000",
          surface_water: "24",
          population: "0",
          residents: [{ name: "Robot X" }, { name: "Robot Y" }],
          url: "https://truss.works",
        },
      ],
    };

    fetch.once(JSON.stringify(firstResponse));
    fetch.once(JSON.stringify(secondResponse));

    const data = await fetchStarWarsAPIPlanets();
    expect(data).toEqual([firstResponse.results[0], secondResponse.results[0]]);
  });
});
