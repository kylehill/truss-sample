export type StarWarsAPIResponse = {
  count: number;
  next: string | null;
  results: StarWarsAPIPlanet[];
};

export type StarWarsAPIPlanet = {
  name: string;
  diameter: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: StarWarsAPIPerson[];
  url: string;
};

export type StarWarsAPIPerson = {
  name?: string;
};
