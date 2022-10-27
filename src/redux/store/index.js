import { combineReducers, legacy_createStore as createStore, compose, applyMiddleware} from "redux";
import { reducer } from "../reducer/countreducer";
import {colorReducer} from "../reducer/colorReducer"
import { logger, tes } from "../middleWare/logger";
import { authProcess } from "../reducer/autreducer";
import thunk from "redux-thunk";
//export 
const allReducers = combineReducers({
  count: reducer,
  color: colorReducer,
  authProcess: authProcess,
})
 

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

  
   export const store = createStore(
    allReducers,
    composeEnhancers (applyMiddleware(thunk))
  )

//   export const store = createStore(
//     allReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )