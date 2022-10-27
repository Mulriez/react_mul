
const colorState ={
    color:"#FF1E1E"
  }
  
 export const colorReducer = (state = colorState, action) => {
    if (action.type === "change") {
      return{
        color: action.type
      }
    }
    if (action.type === "return") {
      return{
        color: "#FF1E1E"
      }
    }
    return state;
  }

