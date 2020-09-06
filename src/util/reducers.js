/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from "redux-immutable";

import reducerRegistry from "./reducerRegistry";

// Preserve initial state for not-yet-loaded reducers
const getDynamicReducers = (reducers, initialState) => {
  const reducerNames = Object.keys(reducers);
  const staticReducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
    if (
      reducerNames.indexOf(item) === -1 &&
      staticReducerNames.indexOf(item) !== -1
    ) {
      reducers[item] = (state = null) => state;
    }
  });
  return reducers;
};


export default function createReducer({ reducers, initialState }) {
  const dynamicReducers = getDynamicReducers(
    reducers || reducerRegistry.getReducers(),
    initialState
  );

  return combineReducers({
    ...dynamicReducers
  });
}
