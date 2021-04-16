import { useEffect, useReducer } from "react";
import { reducer, initialize, LoadingStatus } from "./reducer";
import PlanetTable from "components/PlanetTable";
import ErrorBlock from "components/ErrorBlock";
import LoadingBlock from "components/LoadingBlock";
import { fetchStarWarsAPIPlanets } from "util/fetchStarWarsAPIPlanets";

// import { mockData } from "./mockData";

import styles from "./styles.module.css";

const LandingPage = () => {
  const [state, dispatch] = useReducer(reducer, null, initialize);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStarWarsAPIPlanets();
        dispatch({
          data,
          type: "fetch_success",
        });
      } catch {
        dispatch({
          type: "fetch_failure",
        });
      }
    };

    if (state.loading === LoadingStatus.Initial) {
      dispatch({
        type: "fetch_start",
      });
      fetchData();
    }
  }, []);

  return (
    <div className={styles.container}>
      {state.loading === LoadingStatus.Loading && <LoadingBlock />}
      {state.loading === LoadingStatus.Failure && (
        <ErrorBlock
          header="Well, actually, that's not a moon. It's a space station."
          subhead="There was an error retrieving data. Oh no! What have you done?!"
        />
      )}
      {state.loading === LoadingStatus.Success && <PlanetTable planets={state.planets} />}
    </div>
  );
};

export default LandingPage;
