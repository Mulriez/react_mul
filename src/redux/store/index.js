import {
  combineReducers,
  legacy_createStore,
  compose,
  applyMiddleware,
} from "redux";
import { authProcess } from "../reducer/authReducer";
import thunk from "redux-thunk";
//export
const allReducers = combineReducers({
  authProcess: authProcess,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = legacy_createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
