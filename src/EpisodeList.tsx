import React from "react";
import { IEpisode } from "./interfaces";

const EpisodeList = (props: any): JSX.Element => {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;
  return (
    <>
      {episodes.map((episode: IEpisode) => {
        return (
          <section key={episode.id} className="episode-box">
            <img
              src={episode.image && episode.image.medium}
              alt={`Rick and Morty ${episode.name}`}
            />
            <div>{episode.name}</div>
            <section
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Season: {episode.season} Number: {episode.number}
              <br />
              <button
                type="button"
                onClick={() => toggleFavAction(state, dispatch, episode)}
              >
                {favourites.find((fav: IEpisode) => fav.id === episode.id)
                  ? "Unfav"
                  : "Fav"}
              </button>
            </section>
          </section>
        );
      })}
    </>
  );
};

export default EpisodeList;
