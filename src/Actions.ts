import { IEpisode, IAction, IState } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();
  dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode
): IAction => {
  const episodeInFav = state.favourites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode
  };
  if (episodeInFav) {
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: episode
    };
  }
  return dispatch(dispatchObj);
};
