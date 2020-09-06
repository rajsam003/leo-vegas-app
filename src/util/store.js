import { createStore, applyMiddleware } from "redux";
import { fromJS } from "immutable";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import createReducer from "./reducers";
import reducerRegistry from "./reducerRegistry";

export function configureStore(initialState = {}) {
  let store = createStore(
    createReducer({ initialState }),
    fromJS(initialState),
    composeWithDevTools(applyMiddleware(thunk))
  );

  // replace the store's reducer whenever a new reducer is registered.
  reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(createReducer({ reducers }));
  });

  return store;
}
