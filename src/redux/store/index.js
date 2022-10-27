import { combineReducers, legacy_createStore as createStore, compose, applyMiddleware} from "redux";
import { reducer } from "../reducer/countreducer";
import {colorReducer} from "../reducer/colorReducer"
import { logger } from "../middleWare/logger";

//export 
const allReducers = combineReducers({
  count: reducer,
  color: colorReducer,
})
 

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

  
   export const store = createStore(
    allReducers,
    composeEnhancers (applyMiddleware(logger))
  )

//   export const store = createStore(
//     allReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )