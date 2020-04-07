import React from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { toggleFavAction, fetchDataAction } from "./Actions";

const HomePage = () => {
  const { state, dispatch } = React.useContext(Store);

  const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

  React.useEffect(() => {
    Object.is(state.episodes.length, 0) && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  };

  return (
    <>
      <React.Suspense fallback={<div>...Loading</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </>
  );
};

export default HomePage;
