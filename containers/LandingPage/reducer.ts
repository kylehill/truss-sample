import type { StarWarsAPIPlanet } from "types/swapi";
import type { Planet } from "types/planet";
import type { Reducer } from "react";

export enum LoadingStatus {
  Loading,
  Success,
  Failure,
}

export type LandingPageState = {
  loading: LoadingStatus;
  data: StarWarsAPIPlanet[];
  planets: Planet[];
};

export type LandingPageAction =
  | {
      type: "fetch_success";
      data: StarWarsAPIPlanet[];
    }
  | {
      type: "fetch_failure";
    };

const convertSwapiToPlanet = (rawPlanet: StarWarsAPIPlanet): Planet => {
  const surfaceArea =
    rawPlanet.diameter !== "unknown" ? (Number(rawPlanet.diameter) / 2) * 4 * Math.PI : 0;

  const waterSurfaceArea =
    rawPlanet.surface_water !== "unknown"
      ? Number(rawPlanet.surface_water) * 0.01 * surfaceArea
      : null;

  return {
    waterSurfaceArea,
    name: rawPlanet.name !== "unknown" ? rawPlanet.name : null,
    climate: rawPlanet.climate !== "unknown" ? rawPlanet.climate.split(", ") : null,
    terrain: rawPlanet.terrain !== "unknown" ? rawPlanet.terrain.split(", ") : null,
    population: rawPlanet.population !== "unknown" ? Number(rawPlanet.population) : null,
    residents: rawPlanet.residents.length,
    url: rawPlanet.url !== "unknown" ? rawPlanet.url : null,
  };
};

export const reducer: Reducer<LandingPageState, LandingPageAction> = (state, action) => {
  switch (action.type) {
    case "fetch_failure": {
      return {
        ...state,
        loading: LoadingStatus.Failure,
      };
    }

    case "fetch_success": {
      return {
        ...state,
        loading: LoadingStatus.Success,
        data: action.data,
        planets: action.data.map(convertSwapiToPlanet),
      };
    }
  }
};

export const initialize = (): LandingPageState => {
  return {
    loading: LoadingStatus.Loading,
    data: [],
    planets: [],
  };
};
