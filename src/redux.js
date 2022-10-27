// import { combineReducers, legacy_createStore as createStore} from "redux";

// //membuat state pada redux
// const initialState = {
//   value: 0,
//   status: "",
// };

// //membuat reducer => function untuk merubah value dari state redux
// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       console.log(state);
//       return {
//         ...state,
//         value: state.value + 1,
//         status: action.status,
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         value: state.value - 1,
//         status: action.status,
//       };
//     default:
//       return state;
//   }
// };

// //membuat Action
// export const increment = () => {
//   return {
//     type: "INCREMENT",
//     status: "Boost!!!",
//   };
// };
// export const decrement = () => {
//   return {
//     type: "DECREMENT",
//     status: "Devide!!!",
//   };
// };


// const colorState ={
//   color:"#FF1E1E"
// }

// const colorReducer = (state = colorState, action) => {
//   if (action.type === "change") {
//     return{
//       color: action.type
//     }
//   }
//   if (action.type === "return") {
//     return{
//       color: "#FF1E1E"
//     }
//   }
//   return state;
// }



// //export 
// const allReducers = combineReducers({
//   count: reducer,
//   color: colorReducer,
// })

// //membuat store
// export const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )