import { fromJS } from "immutable";

import {
  GAMES_LOADING,
  GAMES_ERROR,
  REDUCER_NAME,
  SET_GAMES,
  SET_FILTERED_GAMES
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  games: [],
  filteredGames: [],
  isLoading: false,
  isError: false
});

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAMES_LOADING:
      return state.set("isLoading", action.data);
    case GAMES_ERROR:
      return state.set("isError", action.data);
    case SET_GAMES:
      return state.set("games", fromJS(action.data));
    case SET_FILTERED_GAMES:
      return state.set("filteredGames", fromJS(action.data));
    default:
      return state;
  }
};

export const getGamesState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
export const selectGames = state => getGamesState(state).get("games");
export const selectFilteredGames = state => getGamesState(state).get("filteredGames");

reducerRegistry.register(REDUCER_NAME, gameReducer);