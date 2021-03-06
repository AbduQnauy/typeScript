import React from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { toggleFavAction } from "./Actions";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

const FavPage = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  };

  return (
    <React.Suspense fallback={<div>...Loading</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
};

export default FavPage;
