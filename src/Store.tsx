import React from "react";
import { IEpisode, IState, IAction } from "./interfaces";

const initialState: IState = {
  episodes: [],
  favourites: []
};
export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, { type, payload }: IAction) => {
  switch (type) {
    case "FETCH_DATA":
      return { ...state, episodes: payload };
    case "ADD_FAV":
      return { ...state, favourites: [...state.favourites, payload] };
    case "REMOVE_FAV": {
      const favWithoutEpisode = state.favourites.filter(
        (fav: IEpisode) => fav.id !== payload.id
      );
      return { ...state, favourites: favWithoutEpisode };
    }
    default:
      return state;
  }
};

export function StoreProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
