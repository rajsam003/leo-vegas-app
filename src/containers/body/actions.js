import {
    GAMES_LOADING,
    GAMES_ERROR,
    SET_GAMES,
    SET_FILTERED_GAMES
} from "./constants";
import Api from "../../service/main";

const isLoading = data => ({
    type: GAMES_LOADING,
    data
});
  
const isError = data => ({
    type: GAMES_ERROR,
    data
});
  
const setGames = data => ({
    type: SET_GAMES,
    data
});

const setFilteredGames = data => ({
    type: SET_FILTERED_GAMES,
    data
});

export const getGames = (data) => dispatch => {
    dispatch(isLoading(true));
    dispatch(setFilteredGames(data));
    return Api.games
      .getGames()
      .then(response => {
        dispatch(setGames(response));
        return response;
    })
    .then(response => {
        dispatch(isLoading(false));
        return response;
    })
    .catch(error => {
        dispatch(isLoading(false));
        dispatch(isError(true));
        console.error(error);
        throw error;
    });
};