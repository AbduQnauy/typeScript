/**
 * All the interfaces!!
 */

export type Dispath = React.Dispatch<IAction>;

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: { medium: string; original: string };
  summary: string;
}
export interface IState {
  episodes: IEpisode[];
  favourites: IEpisode[];
}
export interface IAction {
  type: string;
  payload: IEpisode | any;
}

export interface IEpisodeProps {
  episodes: IEpisode[];
  store: { state: IState; dispatch: Dispath };
  toggleFavAction: (
    state: IState,
    dispatch: Dispath,
    episode: IEpisode
  ) => IAction;
  favourites: IEpisode[];
}
