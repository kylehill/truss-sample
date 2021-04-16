import { StarWarsAPIPlanet, StarWarsAPIResponse } from "types/swapi";

const SW_API_URL = "https://swapi.dev/api/planets/";

export const fetchSegment = async (url: string): Promise<StarWarsAPIResponse> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchStarWarsAPIPlanets = async (): Promise<StarWarsAPIPlanet[]> => {
  const planets: StarWarsAPIPlanet[] = [];
  let url: string | null = SW_API_URL;

  while (url !== null) {
    const segment: StarWarsAPIResponse = await fetchSegment(url);
    url = segment.next;
    planets.push(...segment.results);
  }

  return planets;
};
